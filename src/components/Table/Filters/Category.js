// "use client"

// import * as React from "react"
// import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"


// import { getCategories } from "../data/sample_data"

// import Checkbox from '@mui/material/Checkbox';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// // import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
// // import CheckBoxIcon from '@mui/icons-material/CheckBox';

// export function CategorySelect({categories,setCategories}) {
//   const [open, setOpen] = React.useState(false)
//   const [value, setValue] = React.useState("")
//   // const [categories, setCategories] = React.useState([]);


//   React.useEffect(() => {
//     const tmpCategories = getCategories();
//     const updatedCategories = tmpCategories.map(({ name, items }) => ({
//       label: `${name} (${items})`,
//       value: name
//     }));
//     setCategories(updatedCategories);
//   }, []);
//   const handleCategoryChange = (event, value) => {
//     setCategories(value);
//   };

//   return (
//     <>
//       <Autocomplete
//         multiple
//         id="checkboxes-tags-demo"
//         options={categories}
//         disableCloseOnSelect
//         getOptionLabel={(option) => option.title}
//         onChange={handleCategoryChange}
//         value={categories}
//         renderOption={(props, option, { selected }) => (
//           <li {...props}>
//             <Checkbox
//               icon={icon}
//               checkedIcon={checkedIcon}
//               style={{ marginRight: 8 }}
//               checked={selected}
//             />
//             {option.title}
//           </li>
//         )}
//         style={{ marginBottom: 8 }}
//         renderInput={(params) => (
//           <TextField {...params} label="Categories" placeholder="Choose your category" />
//         )}
//       />
//     </>

//   );
// }
