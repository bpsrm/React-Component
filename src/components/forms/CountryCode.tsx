import React, { useState, useEffect } from "react";

interface Country {
  name: string;
  callingCodes: string[];
  flags: { svg: string; png: string; };
}

interface CountryType {
  className?: string;
}

export default function CountryCode({ className }: CountryType) {
  const [countryCodes, setCountryCodes] = useState<Country[]>([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>("");

  useEffect(() => {
    getCountryCode();
  }, []);

  async function getCountryCode() {
    try {
      const response = await fetch("https://restcountries.com/v2/all");
      const data = await response.json();

      const codes: Country[] = data.map((country: Country) => ({
        name: country.name,
        callingCodes: country.callingCodes,
        flag: country.flags,
      }));

      codes.sort((a, b) => a.name.localeCompare(b.name));

      return setCountryCodes(codes);
    } catch (error) {
      console.error("Error fetching country codes:", error);
    }
  }
  function handleCountryCodeChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedCountryCode(event.target.value);
  }

  return (
    <div className={className}>
      <label htmlFor="countryCode">Select Country:</label>
      <select id="countryCode" name="countryCode" value={selectedCountryCode} onChange={handleCountryCodeChange} >
        <option value="">Select Country</option>
        {countryCodes.map((country) => <option key={country.name} value={country.callingCodes[0]}>{`${country.name} (+${country.callingCodes[0]})`}</option>)}
      </select>
    </div>
  );
}
