import React, { useState, useEffect } from "react";

interface Country {
  name: string;
  callingCodes: string[];
}

interface CountryType {
  className?: string;
}

export default function CountryCode({ className }: CountryType) {
  const [countryCodes, setCountryCodes] = useState<Country[]>([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>("");

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => {
        const codes: Country[] = data.map((country: Country) => ({
          name: country.name,
          callingCodes: country.callingCodes,
        }));

        codes.sort((a, b) => a.name.localeCompare(b.name));

        setCountryCodes(codes);
      })
      .catch((error) => console.error("Error fetching country codes:", error));
  }, []);

  function handleCountryCodeChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    setSelectedCountryCode(event.target.value);
  }

  return (
    <div className={className}>
      <label htmlFor="countryCode">Select Country:</label>
      <select
        id="countryCode"
        name="countryCode"
        value={selectedCountryCode}
        onChange={handleCountryCodeChange}
      >
        <option value="">Select Country</option>
        {countryCodes.map((country) => (
          <option key={country.callingCodes[0]} value={country.callingCodes[0]}>
            {`${country.name} (+${country.callingCodes[0]})`}
          </option>
        ))}
      </select>
    </div>
  );
}
