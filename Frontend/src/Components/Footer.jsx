import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-8 text-center">
        <div className="flex justify-around space-x-4 flex-wrap">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Email: support@onlinebookstore.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Book St, Reading City, ABC 12345</p>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="text-white hover:text-orange-400">About Us</a></li>
              <li><a href="#" className="text-white hover:text-orange-400">Privacy Policy</a></li>
              <li><a href="#" className="text-white hover:text-orange-400">Terms of Service</a></li>
              <li><a href="#" className="text-white hover:text-orange-400">FAQ</a></li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#">
                <img src="https://static.vecteezy.com/system/resources/previews/018/910/719/non_2x/facebook-logo-facebook-icon-free-free-vector.jpg" alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="#">
                <img src="https://store-images.s-microsoft.com/image/apps.60673.9007199266244427.4d45042b-d7a5-4a83-be66-97779553b24d.5d82b7eb-9734-4b51-b65d-a0383348ab1b?h=210" alt="Twitter" className="w-8 h-8" />
              </a>
              <a href="#">
                <img src="https://img.freepik.com/premium-vector/instagram-logo-vector_768467-330.jpg?semt=ais_hybrid" alt="Instagram" className="w-8 h-8" />
              </a>
              <a href="#">
                <img src="https://static.vecteezy.com/system/resources/previews/018/910/715/non_2x/linkedin-logo-linkedin-symbol-linkedin-icon-free-free-vector.jpg" alt="LinkedIn" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <p>&copy; BookBlaze. All rights reserved.</p>
        </div>
      </footer>
  );
}

export default Footer;
