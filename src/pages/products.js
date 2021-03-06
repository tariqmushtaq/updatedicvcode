import React from 'react'
import loadable from '@loadable/component'
import {Container, Row, Col, button} from "react-bootstrap"
import {Link} from 'gatsby'
import Fade from 'react-reveal/Fade'
const Layout = loadable(() => import('../components/layout'))




const products = ({data}) => {


    const {allContentfulProjects:{nodes: allprojects},} = data

    const getbannerimage = data.allContentfulProductsPages.nodes[0].bannerImage.fluid.src


    return (

        <>
            <Layout>
                <div className="section banner-page about" style={{  backgroundImage:   `url(${getbannerimage})`   }}>
                    <Container>
                        <Row>
                            <Col sm={12} md={12}>
                                <div className="title-page">Products</div>
                                <ol className="breadcrumb">
                                    <li><Link to="/">Home</Link></li>
                                    <li className="active">Products</li>
                                </ol>
                            </Col>
                        </Row>
                    </Container>
                </div>
                
                {allprojects.map((projects) => {

                    return(

                         <Fade bottom>
                            <section className="services">
                                <Container>
                                    <Row>
                                    <Col md={12}>
                                        <div className="description-wrapper">
                                            <h3>{projects.projectTitle}</h3>
                                            <p>{projects.description.description}</p>
                                            <Link  target="_blank" to={projects.addPdf.file.url} class="btn btn-danger">Download PDF</Link>
                                            <Link  target="_blank" to="/contact" class="btn btn-danger">Request PDF</Link>
                                        </div>
                                    </Col>
                                    </Row>
                                </Container>
                            </section>
                         </Fade>
                    )

                })}


            </Layout>
        </>

    )
}

export const query = graphql`
  {
    allContentfulProjects {
      nodes {
        projectTitle
        description {
          description
        }
        addPdf {
          file {
            url
          }
        }
      }
    }

    allContentfulProductsPages {
      nodes {
        bannerImage {
          fluid {
            src
          }
        }
      }
    }

  }
`

export default products
