import React from 'react'
import { Container, Section } from '../craft'
import { Button } from '../ui/button'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";

const LatestArticle = () => {
    return (
        <Section className="bg-[#edf4fc]">
            <Container>
                <div>
                    <span className="text-base text-primaryBlue uppercase tracking-[.45em]">Latest Article</span>
                    <div className="flex justify-between items-center">
                        <h2 className="text-black md:text-4xl md:font-bold md:my-0">See Our Latest Blog Posts</h2>
                        <Button className="uppercase bg-primaryBlue px-14 py-6 hover:bg-[#0c2bdb] duration-500">See All Blogs</Button>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="flex gap-10">
                    <div className="bg-white w-full">
                        <div>
                            <Image width={400} height={400} src={'https://wp.ditsolution.net/techno-new/wp-content/uploads/2023/09/blog-1-390x290.jpg'} alt="image" className="w-full h-[17rem] md:my-0 object-cover" />
                        </div>
                        <div>
                            <div className="flex">
                                <span>Techno</span>
                                <span>January 10, 2020</span>
                            </div>
                            <div>
                                <h3>Coin strategy can help youengage Audience</h3>
                                <p>Digital Transformation in Healthcare in 2022: Lorem ipsum dolor sit amet consectet </p>
                                <Button variant="ghost">
                                    Read More <IoIosArrowForward />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-full">
                        <div>
                            <Image width={200} height={200} src={'https://wp.ditsolution.net/techno-new/wp-content/uploads/2023/09/blog-1-390x290.jpg'} alt="image" />
                        </div>
                        <div>
                            <div className="flex">
                                <span>Techno</span>
                                <span>January 10, 2020</span>
                            </div>
                            <div>
                                <h3>Coin strategy can help youengage Audience</h3>
                                <p>Digital Transformation in Healthcare in 2022: Lorem ipsum dolor sit amet consectet </p>
                                <Button variant="ghost">
                                    Read More <IoIosArrowForward />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-full">
                        <div>
                            <Image width={200} height={200} src={'https://wp.ditsolution.net/techno-new/wp-content/uploads/2023/09/blog-1-390x290.jpg'} alt="image" />
                        </div>
                        <div>
                            <div className="flex">
                                <span>Techno</span>
                                <span>January 10, 2020</span>
                            </div>
                            <div>
                                <h3>Coin strategy can help youengage Audience</h3>
                                <p>Digital Transformation in Healthcare in 2022: Lorem ipsum dolor sit amet consectet </p>
                                <Button variant="ghost">
                                    Read More <IoIosArrowForward />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default LatestArticle