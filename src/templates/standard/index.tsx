import './standard.scss';

export default function StandardTemplate(props: any) {
    const data = {
        firstName: "John",
        middleName: 'Dover',
        lastName: 'Doe',
        email: 'john.doe@gmail.com',
        phone: '111 - 222 - 3333',
        positionDesc: "I am a front - end developer with more than 3 years of experience writing html, css, and js.I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.",
        position: "Front - End Developer",
        experience: [
            { company: "KlowdBox", city: 'San Fr', state: 'CA', country: "USA", startDate: 'Jan 2011', endDate: 'Feb 2015', designation: 'Fr developer', description: 'did This and that' },
            { company: "Akount", city: 'San Monica', state: 'CA', country: "USA", startDate: 'Jan 2011', endDate: 'Feb 2015', designation: 'Fullstack developer', description: 'did This and that' },
        ],
        education: [
            { institute: 'Sample Institute of technology', courseName: 'b.tech', city: 'San Fr', state: 'CA', country: 'USA', startDate: 'Jan 2011', endDate: 'Feb 2015', description: "did This and that" },
            { institute: 'Sample Institute of technology', courseName: 'm.tech', city: 'San Fr', state: 'CA', country: 'USA', startDate: 'Jan 2011', endDate: 'Feb 2015', description: "did This and that" },
        ],
        projects: [
            { name: 'DSP', description: "I am a front - end developer with more than 3 years of experience writing html, css, and js.I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow." },
            { name: 'DSP', description: "I am a front - end developer with more than 3 years of experience writing html, css, and js.I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.", projectLink: 'https://www.google.com' }
        ],
        skills: [{ skill: 'Javascript', proficiency: 3 }, { skill: 'CSS', proficiency: 4 }],
        interests: ["Football", "Programming"]

    }

    // 
    return <div>
        <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css' ></link>
        <div className="container">
            <div className="header" >
                <div className="full-name" >
                    <span className="first-name" > {data?.firstName} </span>
                    {data?.middleName && <span className="middle-name" > {data?.middleName} </span>}
                    < span className="last-name" > {data?.lastName} </span>
                </div>
                < div className="contact-info" >
                    <span className="email" > Email: </span>
                    < span className="email-val" > {data?.email}</span>
                    < span className="separator" > </span>
                    < span className="phone" > Phone: </span>
                    < span className="phone-val" > {data?.phone} </span>
                </div>

                < div className="about" >
                    {data?.position && <span className="position" > {data?.position} </span>}
                    <span className="desc" >
                        {data?.positionDesc}
                    </span>
                </div>
            </div>
            < div className="details" >
                <div className="section" >
                    <div className="section__title" > Experience </div>
                    < div className="section__list" >
                        {data?.experience.map((experienceData) => {
                            return <div className="section__list-item" >
                                <div className="left" >
                                    <div className="name" > {experienceData?.company} </div>
                                    < div className="addr" > {experienceData?.city}, {experienceData?.state} </div>
                                    < div className="duration" > {experienceData?.startDate} - {experienceData?.endDate || "Present"} </div>
                                </div>
                                < div className="right" >
                                    <div className="name" > {experienceData?.designation} </div>
                                    < div className="desc" > {experienceData?.description}</div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                < div className="section" >
                    <div className="section__title" > Education </div>
                    < div className="section__list" >
                        {data?.education?.map((eduData) => {
                            return < div className="section__list-item" >
                                <div className="left" >
                                    <div className="name" > {eduData?.institute} </div>
                                    < div className="addr" > {eduData?.city}, {eduData?.state} </div>
                                    < div className="duration" > {eduData?.startDate} - {eduData?.endDate || "Present"} </div>
                                </div>
                                < div className="right" >
                                    <div className="name" > {eduData?.courseName} </div>
                                    < div className="desc" > {eduData?.description} </div>
                                </div>
                            </div>
                        })}
                    </div>

                </div>
                < div className="section" >
                    <div className="section__title" > Projects </div>
                    < div className="section__list" >
                        {data?.projects?.map((projData) => {
                            return < div className="section__list-item" >
                                <div className="name" > {projData?.name} </div>
                                < div className="text" > {projData?.description} {projData?.projectLink && <a href={`${projData?.projectLink}`} target="_blank">link</a>}
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                < div className="section" >
                    <div className="section__title" > Skills </div>
                    < div className="skills" >
                        {/*  */}
                        {data?.skills.map((skillData) => {
                            return <div className="skills__item" >
                                <div className="left" > <div className="name" >
                                    {skillData.skill}
                                </div></div >
                                <div className="right" >
                                    {[...Array(5)].map((val, ind) => {
                                        return <>
                                            < input id={`ck${ind}`} type="checkbox" checked={ind < skillData.proficiency} />
                                            <label htmlFor={`ck${ind}`} > </label>
                                        </>
                                    })}

                                </div>
                            </div>
                        })}


                    </div>


                </div>
                < div className="section" >
                    <div className="section__title" >
                        Interests
                    </div>
                    < div className="section__list" >
                        <div className="section__list-item" >
                            {data?.interests.join(', ')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}