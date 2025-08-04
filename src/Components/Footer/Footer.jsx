import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-20 text-white py-4 text-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} Gourav kumar . All rights reserved.</p>
    </footer>
  )
}

export default Footer