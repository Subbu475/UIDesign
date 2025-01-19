import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Typography, InputBase } from '@mui/material';

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('us');

  const languages = [
    { code: 'us', label: 'English' },
    { code: 'es', label: 'Spanish' },
    { code: 'fr', label: 'French' },
    { code: 'de', label: 'German' },
    { code: 'it', label: 'Italian' },
  ];

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <Select
          value={selectedLanguage}
          onChange={handleChange}
          label="Language"
          input={<InputBase />}
        >
          {languages.map((lang) => (
            <MenuItem key={lang.code} value={lang.code}>
              <span className={`flag-icon flag-icon-${lang.code}`} style={{ marginRight: 10 }}></span>
              {lang.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default LanguageDropdown;
