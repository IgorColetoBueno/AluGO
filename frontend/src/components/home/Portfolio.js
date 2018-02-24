import React, { Component } from 'react'
class Portfolio extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="no-padding" id="portfolio">
                <div className="container-fluid">
                    <div className="row no-gutter">
                        <div className="col-lg-4 col-sm-6">
                            <a href="#" className="portfolio-box">
                                <img src="img/portfolio/1.jpg" className="img-responsive" alt="AluGO Image"/>
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                        <div className="project-category text-faded">
                                            Category
                                        </div>
                                        <div className="project-name">
                                            Project Name
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a href="#" className="portfolio-box">
                                <img src="img/portfolio/2.jpg" className="img-responsive" alt="AluGO Image" />
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                        <div className="project-category text-faded">
                                            Category
                                        </div>
                                        <div className="project-name">
                                            Project Name
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a href="#" className="portfolio-box">
                                <img src="img/portfolio/3.jpg" className="img-responsive" alt="AluGO Image" />
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                        <div className="project-category text-faded">
                                            Category
                                        </div>
                                        <div className="project-name">
                                            Project Name
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a href="#" className="portfolio-box">
                                <img src="img/portfolio/4.jpg" className="img-responsive" alt="AluGO Image" />
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                        <div className="project-category text-faded">
                                            Category
                                        </div>
                                        <div className="project-name">
                                            Project Name
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a href="#" className="portfolio-box">
                                <img src="img/portfolio/5.jpg" className="img-responsive" alt="AluGO Image" />
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                        <div className="project-category text-faded">
                                            Category
                                        </div>
                                        <div className="project-name">
                                            Project Name
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a href="#" className="portfolio-box">
                                <img src="img/portfolio/6.jpg" className="img-responsive" alt="AluGO Image" />
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                        <div className="project-category text-faded">
                                            Category
                                        </div>
                                        <div className="project-name">
                                            Project Name
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <aside className="bg-dark">
                    <div className="container text-center">
                        <div className="call-to-action">
                            <h2>Encontre o imóvel ideal!</h2>
                            <a href="#" className="btn btn-default btn-xl wow tada">Busque já!</a>
                        </div>
                    </div>
                </aside>
            </section>

        )
    }
}
export default Portfolio;