// pages/index.tsx
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch posts from the API
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3000/posts');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error.message);
        setError('Failed to fetch posts. Please try again later.');
      }
    };

    fetchPosts();
  }, []);

  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  }


  return (
    <div>
      <center>
        <table id="hnmain" border="0" cellPadding="0" cellSpacing="0" width="85%" bgcolor="#f6f6ef">
          <tbody>
            {/* Header Section */}
            <tr>
              <td bgcolor="#ff6600">
                <table border="0" cellPadding="0" cellSpacing="0" width="100%" style={{ padding: '2px' }}>
                  <tbody>
                    {/* ... (Header content) ... */}
                  </tbody>
                </table>
              </td>
            </tr>

            {/* Page Content Section */}
            <tr id="pagespace" title="" style={{ height: '10px' }}></tr>
            <tr>
              <td>
              {/* Additional Table Structure */}
              <table border="0" cellpadding="0" cellspacing="0"  width="100%" style={{ padding: '2px' }} bgcolor="#ff6600">
                <tbody>
                  <tr>
                    <td style={{ width: '36px', padding: '2px', paddingRight: '4px' }}>
                      <a href="https://news.ycombinator.com">
                        <img src="https://news.ycombinator.com/y18.svg" width="18px" height="18px" style={{ border: '1px white solid', display: 'block' }} />
                      </a>
                    </td>
                    <td style={{ lineHeight: '12pt', height: '10px' }}>
                      <span class="pagetop">
                        <b class="hnname">
                          <a href="news">Hacker News</a>
                        </b>&nbsp;&nbsp;&nbsp;
                        <a href="newest">new</a> | <a href="front">past</a> | <a href="newcomments">comments</a> |{' '}
                        <a href="ask">ask</a> | <a href="show">show</a> | <a href="jobs">jobs</a> |{' '}
                        <a href="submit" rel="nofollow">
                          submit
                        </a>
                      </span>
                    </td>
                    <td style={{ textAlign: 'right', padding: '2px', paddingRight: '4px' }}>
                      <span class="pagetop">
                        <a href="login?goto=news">login</a>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* End of Additional Table Structure */}



                <table border="0" cellPadding="0" cellSpacing="0">
                  <tbody>
                    {/* Render posts dynamically */}
                    {posts.map((post, index) => (
                      <React.Fragment key={post.id}>
                        <tr className="athing">
                          <td align="right" valign="top" className="title">
                            <span className="rank">{index + 1}.</span>
                          </td>
                          <td valign="top" className="votelinks">
                            <center>
                              <a id={`up_${post.id}`} href={`vote?id=${post.id}&amp;how=up&amp;goto=news`}>
                                <div className="votearrow" title="upvote"></div>
                              </a>
                            </center>
                          </td>
                          <td className="title">
                            <span className="titleline">
                              <a href={post.url}>{post.title}</a>
                              &nbsp;
                              <span className="sitebit comhead">
                                (<a href={`from?site=${post.url}`}>
                                  <span className="sitestr">{post.url?post.url.split("://www.")[1]:""}</span>
                                </a>)
                              </span>
                            </span>
                          </td>
                        </tr>
                        {/* User information section */}
                        <tr>
                          <td colSpan="2"></td>
                          <td className="subtext">
                            <span className="subline">
                              <span className="score" id={`score_${post.id}`}>{Math.floor(Math.random() * (100 - 10) + 10)} points</span> by{' '}
                              <a href={`user?id=${post.userId}`} className="hnuser">
                                {post.by}
                              </a>{' '}
                              <span className="age" title={post.createdAt}>
                                <a href={`item?id=${post.id}`}> {(new Date(post.time*1000)).getHours()} hours ago</a>
                              </span>{' '}
                              <span id={`unv_${post.id}`}></span> | <a href={`hide?id=${post.id}&amp;goto=news`}>hide</a> |{' '}
                              <a href={`item?id=${post.id}`}>{Math.floor(Math.random() * (100 - 10) + 10)}&nbsp;comments</a>
                            </span>
                          </td>
                        </tr>
                        <tr className="spacer" style={{ height: '5px' }}></tr>
                      </React.Fragment>
                    ))}

                    {/* More link */}
                    <tr className="morespace" style={{ height: '10px' }}></tr>
                    <tr>
                      <td colSpan="2"></td>
                      <td className="title">
                        <a href="?p=2" className="morelink" rel="next">
                          More
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

          {/* Footer Section */}
          <tr>
            <td>
              <img src="https://news.ycombinator.com/s.gif" height="10" width="0" />
              <table width="100%" cellSpacing="0" cellPadding="1">
                <tbody>
                  {/* ... (Footer content) ... */}
                  <tr>
                    <td bgcolor="#ff6600"></td>
                  </tr>
                </tbody>
              </table>
              <br />
              <center>
                <span class="yclinks">
                  <a href="newsguidelines.html">Guidelines</a> | <a href="newsfaq.html">FAQ</a> | <a href="lists">Lists</a> |{' '}
                  <a href="https://github.com/HackerNews/API">API</a> | <a href="security.html">Security</a> |{' '}
                  <a href="https://www.ycombinator.com/legal/">Legal</a> | <a href="https://www.ycombinator.com/apply/">Apply to YC</a> |{' '}
                  <a href="mailto:hn@ycombinator.com">Contact</a>
                </span>
                <br />
                <br />
                <form method="get" action="//hn.algolia.com/">
                  Search: <input type="text" name="q" size="17" autocorrect="off" spellcheck="false" autocapitalize="off" autocomplete="false" />
                </form>
              </center>
            </td>
          </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default Home;
