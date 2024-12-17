import React from 'react';
import { Link } from 'react-router-dom';

export function ProductLinks() {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4">Products</h3>
      <ul className="space-y-2">
        <li>
          <Link to="#" className="text-gray-400 hover:text-amber-400 transition-colors">
            Lumeth App
          </Link>
        </li>
        <li>
          <a 
            href="https://youtu.be/NRaNxnM5Nn8?si=7MvM-ckUqxubQR0K"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-amber-400 transition-colors"
          >
            Lumeth Helm
          </a>
        </li>
        <li>
          <a 
            href="https://youtu.be/YjISmo-KCYE?si=qkITnhSzWwJGQpSK"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-amber-400 transition-colors"
          >
            Lumeth Tocca
          </a>
        </li>
      </ul>
    </div>
  );
}