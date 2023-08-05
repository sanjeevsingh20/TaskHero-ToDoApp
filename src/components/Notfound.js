import React from "react";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div>
      <div class="flex items-center justify-center h-screen">
        <div class="flex-col space-y-4 text-center">
          <div class="text-fuchsia-600 text-xl font-medium">
            <div className="d-flex justify-center">
              <img
                src="https://i.ibb.co/c26z2hZ/image-removebg-preview-11.png"
                alt="image-removebg-preview-11"
                border="0"
                width={"100"}
              />
            </div>
          </div>
          <div class="text-7xl font-bold text-violet-700">404</div>
          <div class="text-5xl font-medium">Page not found</div>
          <div class="text-gray-500">
            Sorry, the page you're looking for isn't available.
          </div>
          <div class="flex items-center justify-center">
            <Link to="/">
              <div class="bg-fuchsia-600 px-4 py-1 text-dark font-medium rounded-lg  hover:scale-105 cursor-pointer">
                Go to Homepage
              </div>
            </Link>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
    </div>
  );
}
