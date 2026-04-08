import { useState } from 'react';
import './LanguageDropdown.css';

export default function LanguageDropdown({ onChange }) {
  const [selected, setSelected] = useState('en');

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'am', label: 'Amharic', flag: '🇪🇹' },
    { code: 'es', label: 'Spanish', flag: '🇪🇸' },
    { code: 'fr', label: 'French', flag: '🇫🇷' },
  ];

  function handleSelect(e) {
    const value = e.target.value;
    setSelected(value);
    onChange(value);
  }

  return (
    <select
      className="language-dropdown"
      value={selected}
      onChange={handleSelect}>
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.flag} {lang.label}
        </option>
      ))}
    </select>
  );
}
