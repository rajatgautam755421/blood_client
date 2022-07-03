import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Delete from "./Delete";

const Donor = () => {
  const [donor, setDonor] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/all/donations"
        );
        console.log(data.msg);
        setDonor(data.msg);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [refresh]);
  return (
    <>
      <Navbar />
      {show && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>Successfully Deleted</strong> .
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setShow(false)}
          />
        </div>
      )}
      <h1 className="text-4xl text-center my-2" style={{ color: "#276749" }}>
        Donor Registration
      </h1>
      {donor.length === 0 ? (
        <h1 style={{ textAlign: "center", fontSize: "24px" }}>No data</h1>
      ) : (
        <>
          {loading ? (
            <>
              <div
                className="spinner-border mx-auto my-3"
                role="status"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <span className="visually-hidden">Loading...</span>
              </div>
              <h2 className="text-sm font-bold text-red-600 mt-1 text-center">
                Loading...
              </h2>
            </>
          ) : (
            <>
              <div style={{ width: "100%", overflowX: "scroll" }}>
                <table className="table container">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Blood Group</th>
                      <th scope="col">Date Of Birth</th>
                      <th scope="col">Phone Number</th>
                      <th scope="col">Email</th>
                      <th scope="col">Occupation</th>
                      <th scope="col">Address</th>

                      <th scope="col">Last Donation</th>
                      <th scope="col">Diseases</th>
                      <th scope="col">Allergies</th>
                      <th scope="col">Cardiac</th>
                      <th scope="col">Bleeding</th>
                      <th scope="col">HIV</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donor
                      ? donor.map((value, index) => {
                          return (
                            <>
                              <tr>
                                <td>{value ? value.name : null}</td>
                                <td>{value ? value.gender : null}</td>
                                <td>{value ? value.bloodGroup : null}</td>

                                <td>{value ? value.dateOfBirth : null}</td>

                                <td>{value ? value.phoneNumber : null}</td>
                                <td>{value ? value.email : null}</td>
                                <td>{value ? value.occupation : null}</td>
                                <td>{value ? value.address : null}</td>
                                <td>{value ? value.lastDonation : null}</td>
                                <td>{value ? value.disease : null}</td>
                                <td>{value ? value.allergies : null}</td>
                                <td>{value ? value.cardiac : null}</td>
                                <td>{value ? value.bleeding : null}</td>
                                <td>{value ? value.hhh : null}</td>
                                <td>
                                  <Delete
                                    id={value ? value._id : null}
                                    setShow={setShow}
                                    refresh={refresh}
                                    setRefresh={setRefresh}
                                  />{" "}
                                </td>
                              </tr>
                            </>
                          );
                        })
                      : null}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Donor;
