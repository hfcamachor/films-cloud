import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Autocomplete, Box, Button, TextField } from "@mui/material";
import { Films } from "../../types/types";

interface AutoCompleteProps {
  onInputValue: (
    e: string,
    setInputValue: Dispatch<SetStateAction<string>>
  ) => void;
  options: Films[];
  onAddClick: (inputValue: Films) => void;
  isLoadingSuggestions: boolean;
}
export const AutoComplete = ({
  onInputValue,
  options,
  onAddClick,
  isLoadingSuggestions,
}: AutoCompleteProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [searchedFilm, setSearchedFilm] = useState<Films | null>(null);

  useEffect(() => {
    onInputValue(inputValue, setInputValue);
    if (options.length) {
      setSearchedFilm(null);
    }
  }, [inputValue, options]);

  const addFilm = () => {
    if (!!searchedFilm?.imdbID) {
      onAddClick(searchedFilm);
      setInputValue("");
      setSearchedFilm(null);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          maxWidth: "500px",
          display: "flex",
          gap: "10px",
          margin: "auto",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={
              !inputValue
                ? []
                : options.map((option) => {
                    return {
                      label: option.Title,
                      imdbID: option.imdbID,
                      year: option.Year,
                    };
                  })
            }
            value={inputValue}
            onChange={(e, value: any) => setSearchedFilm(value)}
            filterOptions={(x) => x}
            loading={!!inputValue && isLoadingSuggestions}
            renderOption={(props, option) => {
              return (
                <li {...props} key={option.imdbID}>
                  {option.label} {option.year}
                </li>
              );
            }}
            renderInput={(params) => (
              <TextField
                className=""
                {...params}
                label="Search input"
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
        </Box>
        <Button
          disabled={options.length < 1 || !searchedFilm}
          variant="contained"
          onClick={() => addFilm()}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};
