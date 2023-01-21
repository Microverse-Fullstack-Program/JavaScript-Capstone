const about = `
<p>The <a href="https://www.metmuseum.org">Metropolitan Museum of Art</a> 
presents over 5,000 years of art from around the world for everyone to experience and enjoy. 
The Museum lives in two iconic sites in New York City—The Met Fifth Avenue and The Met Cloisters. 
Millions of people also take part in The Met experience online.
</p>
<p>Since it was founded in 1870, The Met has always aspired to be more than a treasury of rare and 
beautiful objects. Every day, art comes alive in the Museum’s galleries and through its exhibitions
and events, revealing both new ideas and unexpected connections across time and across cultures.
</p>
<p>The Metropolitan Museum of Art provides select datasets of information on more than 470,000 artworks 
in its Collection for unrestricted commercial and noncommercial use. To the extent possible under law, 
The Metropolitan Museum of Art has waived all copyright and related or neighboring rights to this dataset 
using the <a href="https://creativecommons.org/publicdomain/zero/1.0/">Creative Commons Zero</a> license. 
This work is published from the United States of America. These select datasets are now available for use 
in any media without permission or fee; they also include identifying data for artworks under copyright. 
The datasets support the search, use, and interaction with the Museum’s collection.
</p>
<p>The Met’s Open Access datasets are available through our API. 
The API (RESTful web service in JSON format) gives access to all of The Met’s Open Access data 
and to corresponding high resolution images (JPEG format) that are in the public domain.
</p>
<h2 id="access-to-the-api">Access to the API</h2>
<p>At this time, we do not require API users to register or obtain an API key to use the service. 
Please limit request rate to 80 requests per second.
</p>
<h2 id="endpoints">Endpoints</h2>
<p>There are API endpoints available for the following elements:</p>
<ul>
<li><strong><a href="#objects">Objects</a>:</strong> 
    A listing of all valid Object IDs available for access.
</li>
<li><strong><a href="#object">Object</a>:</strong> 
    A record for an object, containing all open access data about that object, 
    including its image (if the image is available under Open Access)
</li>
<li><strong><a href="#departments">Departments</a>:</strong> 
    A listing of all valid departments, with their department ID and 
    the department display name
</li>
<li><strong><a href="#search">Search</a>:</strong> 
    A listing of all Object IDs for objects that contain the search query 
    within the object’s data
</li>
</ul>`;

export default about;