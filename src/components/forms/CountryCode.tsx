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
    <div className={`${className} input-group`}>
      <label htmlFor="countryCode" className="mr-2">select country:</label>
      <select id="countryCode" name="countryCode" className="px-2 py-1 border border-gray-400 rounded-md" value={selectedCountryCode} onChange={handleCountryCodeChange} >
        <option value="">- เลือก -</option>
        {countryCodes.map((country) => <option key={country.name} value={country.callingCodes[0]}>{`${country.name} (+${country.callingCodes[0]})`}</option>)}
      </select>
    </div>
  );
}
