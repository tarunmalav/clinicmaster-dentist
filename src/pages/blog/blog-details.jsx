import { Link } from "react-router-dom";
import { IMAGES } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import ScrollTopButton from "../../component/scrolltotop";
import { useRef } from "react";
import emailjs from '@emailjs/browser';


function BlogDetail() {
    const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		//emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
        emailjs.sendForm('service_61hny88', '__ejs-test-mail-service__', e.target, 'd9b2e0f5fc72cb94792110e8ff2028f3-us16')
		  .then((result) => {
			  console.log('SUCCESS!',result.text);
		  }, (error) => {
			  console.log('FAILED...',error.text);
		  });
		  e.target.reset()
	};	
    return (
        <>
            <Header columnstand="light" />
            <main className="page-content">
                <section className="content-inner-1">
                    <div className="min-container">
                        <div className="dz-blog blog-single style-1">
                            <div className="dz-media alignwide radius-xl">
                                <img src={IMAGES.blogdetail2} alt="" />
                            </div>
                            <div className="dz-info">
                                <h1 className="dz-title">The Skincare Routine That Works Expert Tips for Every Skin Type</h1>
                                <div className="dz-meta">
                                    <ul>
                                        <li className="post-date">17 May 2025</li>
                                        <li className="dz-user"> <i className="fa-solid fa-user" /> By <Link to={"#"}>KK Sharma</Link> </li>
                                        <li className="dz-comment"> <i className="fa-solid fa-message" /> <Link to={"#"}>24 Comments</Link> </li>
                                    </ul>
                                </div>
                                <div className="dz-post-text">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <blockquote className="wp-block-quote is-style-default">
                                        <p>Unlocking the Secrets of Sustainable Fashion: Eco-Friendly Choices for a Stylish and Responsible Wardrobe</p>
                                        <cite>Ronald M. Spino</cite>
                                        <i className="flaticon-right-quote" />
                                    </blockquote>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including.</p>
                                    <div className="dz-media alignfullwide m-b30">
                                        <img src={IMAGES.blogdetail1} alt="/" />
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including.</p>
                                    <h3 className="dz-title">Additional information</h3>
                                    <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </div>
                                <div className="dz-share-post meta-bottom">
                                    <div className="post-tags">
                                        <strong>Tags:</strong>
                                        <Link to={"#"}>Dresses</Link>
                                        <Link to={"#"}>Boots</Link>
                                        <Link to={"#"}>Jewelry</Link>
                                        <Link to={"#"}>Jacket</Link>
                                        <Link to={"#"}>Coat</Link>
                                    </div>
                                    <div className="dz-social-icon primary-light">
                                        <ul>
                                            <li><Link to="https://www.linkedin.com" target="_blank"><i className="fa-brands fa-linkedin" /></Link></li>
                                            <li><Link to="https://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram" /></Link></li>
                                            <li><Link to="https://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook-f" /></Link></li>
                                            <li><Link to="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clear" id="comment-list">
                            <div className="post-comments comments-area style-1 clearfix">
                                <h4 className="comments-title mb-2">Comments (02)</h4>
                                <p className="dz-title-text">There are many variations of passages of Lorem Ipsum available.</p>
                                <div id="comment">
                                    <ol className="comment-list">
                                        <li className="comment even thread-even depth-1 comment" id="comment-2">
                                            <div className="comment-body">
                                                <div className="comment-author vcard">
                                                    <img src={IMAGES.avtarmiddle1} alt="/" className="avatar" />
                                                    <cite className="fn">Michel Poe</cite>
                                                </div>
                                                <div className="comment-content dz-page-text">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                </div>
                                                <div className="reply">
                                                    <Link rel="nofollow" className="comment-reply-link" to={"#"}>Reply</Link>
                                                </div>
                                            </div>
                                            <ol className="children">
                                                <li className="comment byuser comment-author-w3itexpertsuser bypostauthor odd alt depth-2 comment" id="comment-3">
                                                    <div className="comment-body" id="div-comment-3">
                                                        <div className="comment-author vcard">
                                                            <img src={IMAGES.avtarmiddle2} alt="/" className="avatar" />
                                                            <cite className="fn">Celesto Anderson</cite>
                                                        </div>
                                                        <div className="comment-content dz-page-text">
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                        </div>
                                                        <div className="reply">
                                                            <Link className="comment-reply-link" to={"#"}> Reply</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ol>
                                        </li>
                                        <li className="comment even thread-odd thread-alt depth-1 comment" id="comment-4">
                                            <div className="comment-body" id="div-comment-4">
                                                <div className="comment-author vcard">
                                                    <img src={IMAGES.avtarmiddle1} alt="/" className="avatar" />
                                                    <cite className="fn">Monsur Rahman Lito</cite>
                                                </div>
                                                <div className="comment-content dz-page-text">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                </div>
                                                <div className="reply">
                                                    <Link className="comment-reply-link" to={"#"}> Reply</Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                </div>
                                <div className="default-form comment-respond style-1" id="respond">
                                    <h4 className="comment-reply-title mb-2" id="reply-title">Good Comments</h4>
                                    <p className="dz-title-text">There are many variations of passages of Lorem Ipsum available.</p>
                                    <div className="clearfix">
                                        <form  ref={form} onSubmit={sendEmail} method="post" id="comments_form" className="comment-form" noValidate="">
                                            <p className="comment-form-author">
                                                <input id="name" placeholder="Author" name="author" type="text"  />
                                            </p>
                                            <p className="comment-form-email">
                                                <input id="email" required="required" placeholder="Email" name="email" type="email"  />
                                            </p>
                                            <p className="comment-form-comment">
                                                <textarea id="comments" placeholder="Type Comment Here" className="form-control4" name="comment" cols="45" rows="3" required="required"></textarea>
                                            </p>
                                            <p className="col-md-12 col-sm-12 col-xs-12 form-submit">
                                                <button id="submit" type="submit" className="submit btn btn-primary btn-lg filled">Submit Now</button>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <ScrollTopButton />
        </>
    )
}
export default BlogDetail;