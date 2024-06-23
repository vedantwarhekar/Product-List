import { createContext } from "react";
import { useState, useEffect, useMemo } from "react";
import Jacket from "../images/1.jpeg";
import headphone from "../images/2.jpeg";
import Watch from "../images/3.jpeg";
import Machine from "../images/4.jpeg";
import Bank from "../images/5.jpeg";
import Camera from "../images/6.jpeg";
import TV from "../images/7.jpeg";
import Scooter from "../images/8.jpeg";
import Laptop from "../images/9.jpeg";
import Set from "../images/10.jpeg";
import Serum from "../images/11.jpeg";
import Mascara from "../images/12.jpeg";
import Oil from "../images/13.jpeg";
import Lipistic from "../images/14.jpeg";
import Mask from "../images/15.jpeg";

export const ListProvider = createContext({
  filterList: [],
  handleOnChange: () => {},
  handleSort: () => {},
  postPerPage: undefined,
  totalPost: undefined,
  pagination: () => {},
});
const ListProviderMAin = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  const totalPost = list.length;

  // Use useMemo to memoize the calculation of currPost
  const currPost = useMemo(() => {
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    return list.slice(indexOfFirstPost, indexOfLastPost);
  }, [list, currentPage, postPerPage]);

  const pagination = (pgnumber) => setCurrentPage(pgnumber);

  const [filterList, setFilterList] = useState(currPost);

  // Update filterList whenever currPost changes
  useEffect(() => {
    setFilterList(currPost);
  }, [currPost]);

  const handleOnChange = (event) => {
    if (event.target.value === "") {
      setFilterList(currPost);
      return;
    }
    let filterdValue = list.filter(
      (item) =>
        item.title.toLowerCase().indexOf(event.target.value.toLowerCase()) !==
        -1
    );
    if (filterdValue.length === 0) {
      filterdValue = list.filter(
        (item) =>
          item.category
            .toLowerCase()
            .indexOf(event.target.value.toLowerCase()) !== -1
      );
    }
    setFilterList(filterdValue);
  };

  const handleSort = () => {
    const sortedList = [...filterList].sort((a, b) => a.price - b.price);
    setFilterList(sortedList);
  };

  return (
    <ListProvider.Provider
      value={{
        filterList,
        handleOnChange,
        handleSort,
        totalPost,
        postPerPage,
        pagination,
      }}
    >
      {children}
    </ListProvider.Provider>
  );
};

export default ListProviderMAin;

const list = [
  {
    img: Laptop,
    title: "Gaming Laptop",
    description:
      "High-performance gaming laptop with dedicated graphics card and RGB keyboard.",
    price: 79999,
    category: "Electronics",
  },
  {
    img: Camera,
    title: "Professional DSLR Camera",
    description:
      "Full-frame DSLR camera with advanced features for professional photography.",
    price: 89999,
    category: "Electronics",
  },
  {
    img: TV,
    title: "4K Ultra HD Smart TV",
    description:
      "Smart television with 4K resolution, built-in streaming apps, and HDR support.",
    price: 54999,
    category: "Electronics",
  },
  {
    img: Jacket,
    title: "Premium Leather Jacket",
    description:
      "High-quality leather jacket with stylish design and comfortable fit.",
    price: 5999,
    category: "Male Gromming",
  },
  {
    img: Watch,
    title: "Smart Fitness Watch",
    description:
      "Waterproof fitness watch with heart rate monitor and GPS tracking.",
    price: 4999,
    category: "Sports",
  },
  {
    img: headphone,
    title: "Wireless Bluetooth Headphones",
    description:
      "Noise-cancelling headphones with excellent sound quality and long battery life.",
    price: 3499,
    category: "Electronics",
  },

  {
    img: Machine,
    title: "Espresso Coffee Machine",
    description:
      "Compact espresso machine for home use, compatible with coffee pods.",
    price: 7999,
    category: "Electronics",
  },
  {
    img: Bank,
    title: "Portable Power Bank",
    description:
      "High-capacity power bank with fast charging capability for smartphones and tablets.",
    price: 1499,
    category: "Electronics",
  },
  {
    img: Scooter,
    title: "Electric Scooter",
    description:
      "Foldable electric scooter with a range of 25 km per charge and maximum speed of 25 km/h.",
    price: 24999,
    category: "Vehical",
  },
  {
    img: Set,
    title: "Stainless Steel Kitchenware Set",
    description:
      "Complete set of durable stainless steel cookware and utensils for the kitchen.",
    price: 6499,
    category: "Home",
  },
  {
    img: Serum,
    title: "Rejuvenating Facial Serum",
    description:
      "A hydrating and anti-aging serum enriched with hyaluronic acid and vitamin C.",
    price: 2999,
    category: "Beauty",
  },
  {
    img: Mascara,
    title: "Volumizing Mascara",
    description:
      "A long-lasting mascara that adds volume and length to your lashes.",
    price: 899,
    category: "Beauty",
  },
  {
    img: Oil,
    title: "Nourishing Hair Oil",
    description:
      "A lightweight hair oil infused with argan and coconut oil for shiny, healthy hair.",
    price: 1299,
    category: "Beauty",
  },
  {
    img: Lipistic,
    title: "Matte Lipstick Set",
    description: "A set of six long-lasting matte lipsticks in various shades.",
    price: 1999,
    category: "Beauty",
  },
  {
    img: Mask,
    title: "Hydrating Face Mask",
    description:
      "A pack of five sheet masks infused with aloe vera and green tea for ultimate hydration.",
    price: 599,
    category: "Beauty",
  },
];
