import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT, PACKAGE_API_END_POINT } from "../utils/constant";
import UserList from "./UserList";
import CustomerList from "./CustomerList";
import TravelAgencyList from "./TravelAgencyList";
import ActionButtons from "./ActionButtons";
import Navbar from "./Navbar"; // Import Navbar component
import Destination from "./Destination";
import Footer from "./Footer";
import Services from "./Services";
const Home = () => {
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [travelAgencies, setTravelAgencies] = useState([]);
  const [isCustomers, setIsCustomers] = useState(false);
  const [isTravelAgencies, setIsTravelAgencies] = useState(false);
  const [isPackages, setIsPackages] = useState(false); // Track when to show packages

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   } else {
  //     fetchUsersByRole();
  //   }
  // }, [user, navigate]);

  const fetchUsersByRole = async () => {
    try {
      const response = await axios.get(`${USER_API_END_POINT}/getAllUsers`, {
        withCredentials: true,
      });
      console.log("Fetched Users:", response.data);
      setUsers(response.data.data || []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchAllCustomers = async () => {
    try {
      const response = await axios.get(
        `${USER_API_END_POINT}/getAllCustomers`,
        {
          withCredentials: true,
        }
      );
      console.log("Fetched Customers:", response.data);
      setCustomers(response.data.data || []);
      setIsCustomers(true);
      setIsTravelAgencies(false);
      setIsPackages(false); // Hide packages list
      setUsers([]);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  const fetchAllTravelAgencies = async () => {
    try {
      const response = await axios.get(
        `${USER_API_END_POINT}/getAllTravelagency`,
        {
          withCredentials: true,
        }
      );
      console.log("Fetched Travel Agencies:", response.data);
      setTravelAgencies(response.data.data || []);
      setIsTravelAgencies(true);
      setIsCustomers(false);
      setIsPackages(false); // Hide packages list
      setUsers([]);
    } catch (error) {
      console.error("Error fetching travel agencies:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <Destination />
      <Services />
      <Footer />
      <div className="flex-1 flex flex-col justify-center items-center mt-12">
        <h1 className="text-4xl mb-4">Home Page</h1>
        <ActionButtons
          fetchAllCustomers={fetchAllCustomers}
          fetchAllTravelAgencies={fetchAllTravelAgencies}
        />
        {isCustomers === false &&
          isTravelAgencies === false &&
          isPackages === false && <UserList users={users} />}
        {isCustomers && <CustomerList customers={customers} />}
        {isTravelAgencies && (
          <TravelAgencyList travelAgencies={travelAgencies} />
        )}
      </div>
    </div>
  );
};

export default Home;
