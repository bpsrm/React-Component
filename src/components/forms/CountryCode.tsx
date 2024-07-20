import React, { useState, useEffect } from "react";
import { Country, CountryType } from "@/@types/forms.types";
import { GetCountryCode } from "@/services/countryCode/CountryCode.Services";

export default function CountryCode({ className }: CountryType) {
  const [countryCodes, setCountryCodes] = useState<Country[]>([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>("");

  useEffect(() => {
    getCountryCode();
  }, []);

  async function getCountryCode() {
    const res = await GetCountryCode();
    if (res && res.status === 200 && res.statusText === "") {
      const codes: Country[] = res.data.map((country: Country) => ({ name: country.name, callingCodes: country.callingCodes, flag: country.flags }));
      codes.sort((a, b) => a.name.localeCompare(b.name));
      setCountryCodes(codes);
    } else {
      throw new Error("Error fetching country codes");
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
