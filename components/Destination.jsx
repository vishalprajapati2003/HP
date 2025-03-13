import styled from "styled-components";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";
import { useState } from "react";

export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "Singapore",
      subTitle: "Singapore, officially the Republic of Singapore, is a",
      cost: "38,800",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asian country known for its beaches",
      cost: "54,200",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination3,
      title: "Paris",
      subTitle: "Paris, France's capital, is a major European city",
      cost: "45,500",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination4,
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the Pacific Ocean",
      cost: "24,100",
      duration: "Approx 1 night trip",
    },
    {
      image: Destination5,
      title: "Bora Bora",
      subTitle: "Bora Bora is a small South Pacific island northwest of Tahiti",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      image: Destination6,
      title: "London",
      subTitle: "London, the capital of England, is a major global city",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
  ];

  const [active, setActive] = useState(1);

  return (
    <Section id="recommend">
      <div className="title">
        <h2 className="mb-2 font-bold text-green-400 text-2xl"> Destination</h2>
        <h2 className="mb-10 font-bold text-2xl">Popular Destinations</h2>
      </div>
      <div className="destinations cursor-pointer">
        {data.map((destination, index) => {
          return (
            <div key={index} className="destination">
              <img src={destination.image} alt={destination.title} />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="Service 1" />
                  <img src={info2} alt="Service 2" />
                  <img src={info3} alt="Service 3" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>1000 Kms</span>
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;

  .title {
    text-align: center;
  }

  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;

    ul {
      display: flex;
      list-style-type: none;
      width: max-content;

      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
        cursor: pointer;
      }

      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }

  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;

    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;

      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }

      img {
        width: 100%;
      }

      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .services {
          display: flex;
          gap: 0.3rem;

          img {
            width: 2rem;
            border-radius: 1rem;
            background-color: #4d2ddb84;
            padding: 0.3rem 0.4rem;
          }
        }
      }

      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
        }

        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }

    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
