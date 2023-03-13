import {useState} from "react";
import { AddCategory, GifGrid } from "./components";

const includeCategory = (categories: string[], newCategory: string): boolean => categories
    .some(cat => cat.toLowerCase() === newCategory.toLowerCase());

export const GifExpertApp = () => {
    const [categories, setCategories] = useState<string[]>(['One Punch']);
    const handleNewCategory = (category: string): void => {
        if (includeCategory(categories, category)) return;
        setCategories([category, ...categories]);
    };

    return (
      <>
          <h1>GifExpertApp</h1>
          <AddCategory onNewCategory={handleNewCategory} />
          {
              /*categories.map(category => {
                  return <li key={category}>{category}</li> key is a unique identifier and is obligatory
              })*/
              categories.map(category => <GifGrid category={category} key={category} />)
          }
      </>
    );
};