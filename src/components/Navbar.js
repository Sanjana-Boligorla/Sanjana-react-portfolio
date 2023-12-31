export default function Navbar()
{
    
        
    return (
        <header className="bg-customViolet md:sticky top-0 z-10">
          <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
            <div className="title-font font-medium text-white mb-4 md:mb-0">
              <a href="#About" className="ml-3 text-xl">
                Sanjana
              </a>
            </div>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
              <a href="#" className="mr-5 hover:text-white">
                Experience
              </a>
              <a href="#Skills" className="mr-5 hover:text-white">
                Skills
              </a>
            </nav>
            
            
          </div>
        </header>
      );
}