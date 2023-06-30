import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const location = useLocation();
  const userData = location.state?.userData;
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setUsername(userData?.username);
    setToken(userData?.userToken);
    setEmail(userData?.email);

    console.log(username, token, email);
  }, [username, token, email]);

  if (token === null) {
    return navigate("/admin_login");
  }

  const [formValues, setFormValues] = useState({
    product_name: "",
    price: "",
    image: "",
    description: "",
  });
  const [message, setMessage] = useState("");

  const handleform = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const sendRequest = (event) => {
    event.preventDefault();
    console.log(formValues);
    // axios
    //   .post("http://localhost:8000/api/v1/admin-login/", formValues)

    //   .then((response) => {
    //     console.log(response.data);
    //     if (response.data["failed"]) {
    //       setMessage(response.data["failed"]);
    //     } else {
    //       const userData = response.data;

    //       return navigate("/admin_dashboard", {
    //         state: { userData: userData },
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div>
      <h1 className="text-center text-orange-500">Admin Add Product</h1>

      <p className="font-bold text-gray-700 mt-3">Username: {username}</p>
      <p className="font-bold text-gray-700">email: {email}</p>

      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <div className="text-center text-blue-400 font-bold">{message}</div>

          <h1 className="text-xl font-bold leading-tight tracking-tight text-orange-400 md:text-2xl dark:text-white text-center">
            Add product
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="product_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Name
              </label>
              <input
                type="text"
                name="product_name"
                value={formValues["product_name"]}
                onChange={handleform}
                id="product_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="product Name"
                required=""
              />
            </div>

            <div>
              <label
                for="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                price
              </label>
              <input
                type="number"
                name="price"
                value={formValues["price"]}
                onChange={handleform}
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="price"
                required=""
              />
            </div>

            <div>
              <label
                for="Image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Image
              </label>
              <input
                type="file"
                name="image"
                value={formValues["image"]}
                onChange={handleform}
                id="image"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="image"
                required=""
              />
            </div>

            <div>
              <label
                for="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                name="description"
                value={formValues["description"]}
                onChange={handleform}
                id="description"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="product description"
                required=""
              />
            </div>
            <button
              onClick={sendRequest}
              type="submit"
              className="w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
