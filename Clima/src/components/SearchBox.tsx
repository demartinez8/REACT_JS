import { FormEvent, useEffect, useRef, useState } from "react";

export const SearchBox = ({
  handleSearch,
}: {
  handleSearch: (event: FormEvent<HTMLFormElement>, CITY: string) => void;
}) => {
  const [search, setSearch] = useState("");

  const inputReference = useRef<HTMLInputElement>(null);

  const handleChange = (e: FormEvent) => {
    const { value } = e.target as HTMLInputElement;
    setSearch(value);
  };

  useEffect(() => {
    inputReference.current!.focus();
  }, []);

  return (
    <form
      id="form"
      onSubmit={(e) => {
        handleSearch(e, search);
        setSearch("");
      }}
    >
      <label htmlFor="search"></label>
      <input
        placeholder="Buscar Ubicación ..."
        autoComplete="off"
        id="search"
        name="search"
        type="search"
        className="absolute w-72 h-12 p-3 mt-12"
        onChange={handleChange}
        value={search}
        ref={inputReference}
      />
    </form>
  );
};
