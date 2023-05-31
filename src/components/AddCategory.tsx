import React, {useState} from "react";

/*
    You can send the setCategories function as a prop to the AddCategory component in the next way:
    {
        setCategories
    }: {
        setCategories: React.Dispatch<React.SetStateAction<string[]>>
    }
*/
export const AddCategory = (
    { onNewCategory }: { onNewCategory: (category: string) => void }
) => {
    const [inputValue, setInputValue] = useState<string>('');
    const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trimmedInputValue = inputValue.trim();
        if (trimmedInputValue.length <= 1) return;
        //setCategories((categories: string[]) => [...categories, inputValue]);
        onNewCategory(trimmedInputValue);
        setInputValue('');
    };

    return (
        <form aria-label="form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search a gif"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};