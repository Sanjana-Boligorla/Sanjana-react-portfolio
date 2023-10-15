import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faJava, faAws } from '@fortawesome/free-brands-svg-icons';
import { faC, faPlus, faR } from '@fortawesome/free-solid-svg-icons';

export default function Skills()
{
    return(
        <section id="Skills">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mt-4 text-white">
                    Skills & Technologies
                </h1>
            </div>
            <div className="flex flex-wrap">
                <div className='flex relative'>
                    <table className="min-w-full">
                        <tbody>
                        <tr>
                            <td className="text-right"><h2 className="sm:text-2xl text-2xl font-medium title-font text-white">Coding Languages:</h2></td>
                            <td className="text-left">
                                <FontAwesomeIcon icon={faPython} className='fa-2x px-8'/>
                                <FontAwesomeIcon icon={faJava} className='fa-2x pr-8'/>
                                <FontAwesomeIcon icon={faC} className='fa-2x pr-8'/>
                                <FontAwesomeIcon icon={faC} className='fa-2x'/><FontAwesomeIcon icon={faPlus} className='fa-2x'/><FontAwesomeIcon icon={faPlus} className='fa-2x pr-8'/>
                                <FontAwesomeIcon icon={faR} className='fa-2x pr-8'/> 
                            </td>
                        </tr>
                        <tr>
                            <td className="text-right pt-8"><h2 className="sm:text-2xl text-2xl font-medium title-font text-white">Web Development:</h2></td>
                            <td className="text-left pt-8 pl-8">
                                <p>MERN Stack </p>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-right pt-8"><h2 className="sm:text-2xl text-2xl font-medium title-font text-white">Cloud Computing:</h2></td>
                            <td className="text-left pt-8 pl-8">
                            <FontAwesomeIcon icon={faAws} className='fa-2x pr-4'/>Cloud Foundations Course, Certified Cloud Practioner
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </section>
    );
}