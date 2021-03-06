import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import { Container , Row, Col} from 'react-bootstrap'
import Fade from 'react-reveal/Fade';


const aboutfeaturedata = graphql`
   {
      allContentfulHomeAboutSection {
        nodes {
          aboutBox1Heading
          aboutBox1Description {
            aboutBox1Description
          }
          aboutBox2Heading
          aboutBox2Description {
            aboutBox2Description
          }
          aboutBox3Heading
          aboutBox3Description {
            aboutBox3Description
          }
          description {
                description
		  }
		  description2 {
            description2
          }
          aboutCaption
          aboutMainHeading
          
        }
      }
    }
`

const HomeAboutSection = () => {

    const getdata = useStaticQuery(aboutfeaturedata);
    console.log(getdata);

    return (
        <>
	<div className="section feature overlap">
		<Container>
			<Row>
				
				<Col sm={4} md={4}>
					<Fade right>
						<div className="box-icon-2">
							<div className="body-content">
								<div className="heading">{getdata.allContentfulHomeAboutSection.nodes[0].aboutBox1Heading}</div>
							{getdata.allContentfulHomeAboutSection.nodes[0].aboutBox1Description.aboutBox1Description}
							</div>
						</div>
					</Fade>
				</Col>
				<Col sm={4} md={4}>
					<Fade right>
						<div className="box-icon-2">
							<div className="body-content">
								<div className="heading">{getdata.allContentfulHomeAboutSection.nodes[0].aboutBox2Heading}</div>
	{getdata.allContentfulHomeAboutSection.nodes[0].aboutBox2Description.aboutBox2Description}
							</div>
						</div>
					</Fade>	
				</Col>
				<Col sm={4} md={4}>
					<Fade right>
						<div className="box-icon-2">
							<div className="body-content">
								<div className="heading">{getdata.allContentfulHomeAboutSection.nodes[0].aboutBox3Heading}</div>
	{getdata.allContentfulHomeAboutSection.nodes[0].aboutBox3Description.aboutBox3Description}
							</div>
						</div>
					</Fade>
				</Col>
				
			</Row>
			<Fade left>
			<Row>
			
				<Col sm={12} md={12}>
					<h2 className="section-heading">
						{getdata.allContentfulHomeAboutSection.nodes[0].aboutMainHeading}
					</h2>
				</Col>
			</Row>
			</Fade>
			
			<Row>
				
					<Col sm={5} md={5}>
						<Fade left>
							<div className="jumbo-heading">
								<h2>{getdata.allContentfulHomeAboutSection.nodes[0].aboutCaption}</h2>
								<span className="fa fa-paper-plane-o"></span>
							</div>
						</Fade>
					</Col>
					<Col sm={7} md={7}>
						<Fade bottom>
							<p>{getdata.allContentfulHomeAboutSection.nodes[0].description.description}</p>
							<p>{getdata.allContentfulHomeAboutSection.nodes[0].description2.description2}</p>
						</Fade>
					</Col>
				
			</Row>
			
		</Container>
	</div>
        </>
    )
}

export default HomeAboutSection
