import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

const protocol = "https://";
export const domain = protocol + "localhost:7219/api/";

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0M2E0ZjliMS1kYzVjLTQ5MTUtODBmMi1hM2JlZTBhOTE3YWQiLCJqdGkiOiJkNzA5ZDg5NC1iZTkxLTRmMjUtODE2YS1iYjY4MGZmZDk0NjgiLCJlbWFpbCI6IkFkbWluMUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbmlzdHJhdG9yIiwiZXhwIjoxNzIzMTIzNDMyLCJpc3MiOiJSZXN0YXVyYW50QXBpIiwiYXVkIjoiUmVzdGF1cmFudEFwaUNsaWVudCJ9.H-G6BfmWKRJg2GMfaqKVVR_teUfkBLgXhh2ZCiImbvQ";

export const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer  " + accessToken,
};

// <button
// className="delete-service"
// onClick={async () => {
//   const body = JSON.stringify({
//     title: "Car 121",
//     numberOfPeople: 10,
//     Description: "Description asssasds,dsm dmlvdlm.",
//     pricePerNight: 2121.0,
//     quantity: 10,
//     roomCategoryId: 1,
//     serviceId: 2,
//   });
//   // const body = JSON.stringify({
//   //   from: "01-01-2024",
//   //   to: "02-02-2024",
//   //   title: "trip x",
//   //   description: "Description",
//   //   days: 10,
//   //   price: 100.0,
//   //   serviceId: 3,
//   // });

//   console.log(body);

//   const response = await fetch(
//     "https://localhost:7219/api/services/3/cars/1",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization:
//           "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyOGZiNmM1Yi0wY2FlLTQzODItOTI5Yi01NTI3MDU5MmNjNzEiLCJqdGkiOiI2MmE2NzU5Yy04ZDU3LTRlNzItYmIwNS0zZDJhNzc2OWI1NzgiLCJlbWFpbCI6ImFAYS5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbmlzdHJhdG9yIiwiZXhwIjoxNzIzMDM2MDczLCJpc3MiOiJSZXN0YXVyYW50QXBpIiwiYXVkIjoiUmVzdGF1cmFudEFwaUNsaWVudCJ9.YAxlx6mWAYs9liTrx75hKZucuHGpcJbRx7XWm3AQS18",
//       },
//       body,
//     }
//   );

//   console.log(response.status);

//   console.log(await response.json());
// }}
// >
// Delete
// </button>
