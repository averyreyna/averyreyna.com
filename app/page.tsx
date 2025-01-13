import Connections from "./components/connections"
import Footer from "./components/footer"
import MusicalKeyDisplay from "./components/keys"

export default function Page() {
  return (
    <div className="absolute inset-0 w-screen overflow-x-hidden font-sans bg-white">
      {/* Hero Section */}
      <div className="h-1/2 bg-white flex p-16 space-x-16 phone:flex-col phone:w-full phone:p-4 phone:space-x-0 phone:h-auto">
        <div className="w-1/3 phone:w-full text-gray-500">
          <h1 className="mb-4 text-2xl font-semibold tracking-tighter text-gray-900">
            Hello! I'm Avery Reyna.
          </h1>
          <p className="text-lg">
            I'm a Software Engineer working on data quality at Capital One. Before that, I researched computational social science and human-computer interaction with supervision from Jonathan Powell and Pamela Wisniewski. I also collaborated with teams improving developer experience at ActBlue, building predictive models at Swing Left, and researching technology policy at New America.
          </p>
        </div>
        <div className="w-2/3 phone:w-full bg-gray-100 rounded-md h-full flex justify-end items-end phone:mt-4 phone:h-64">
          <MusicalKeyDisplay />
        </div>
      </div>

      <div className="bg-white w-screen p-16 phone:pt-2 flex flex-col items-center phone:p-4">
        {/* Keys Section */}
        <div className="w-full phone:p-4 flex space-x-16 phone:flex-col phone:space-x-0">
          <div className="w-1/3 phone:w-full">
            <div className="sticky top-24 phone:static">
              <h2 className="text-2xl w-full text-gray-900 phone:text-lg font-semibold tracking-tighter">
                Concept Mesh
              </h2>
            </div>
          </div>
          <div className="w-2/3 phone:w-full phone:mt-4">
            <div className="bg-gray-100 rounded-md p-8">
              <Connections />
            </div>
          </div>
        </div>

        <div className="h-32 phone:h-16"></div>

        {/* Contact Section */}
        <div className="w-full flex space-x-16 phone:flex-col phone:space-x-0">
          <div className="w-1/3 phone:w-full">
            <div className="sticky top-24 phone:static">
              <h2 className="text-2xl w-full text-gray-900 phone:text-lg font-semibold tracking-tighter">
                Contact
              </h2>
            </div>
          </div>
          <div className="w-2/3 phone:w-full phone:mt-4">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}