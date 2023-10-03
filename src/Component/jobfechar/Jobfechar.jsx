import { useEffect, useState } from "react";
import SpecuficJob from "../SpecifigJob/SpecuficJob";


const Jobfechar = () => {
    const [jobs, setjobs] = useState([])
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setjobs(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className="text-5xl">Featured Jobs </h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div>
                {
                    jobs.map(alljob=><SpecuficJob key={alljob.id} alljob={alljob} ></SpecuficJob>)
                }
            </div>
        </div>
    );
};

export default Jobfechar;