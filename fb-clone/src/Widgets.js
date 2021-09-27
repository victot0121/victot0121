import React from 'react';
import "./Widgets.css";



function Widgets() {
  return (
    // <div className="widgets">
    //   <div>
    //     <iframe title="my site" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FGoogleAds%2Fposts%2F10159528050987171&show_text=true&width=500"
    //       width="500" height="744"
    //       scrolling="no" frameborder="0" allowfullscreen="true"
    //       allow="autoplay; clipboard-write; encrypted-media;
    //               picture-in-picture; web-share"></iframe>
    //   </div>
    //   <div>
    //     <iframe width="500" height="315"
    //       src="https://www.youtube.com/embed/4UZrsTqkcW4"
    //       title="YouTube video player"
    //       frameborder="0" allow="accelerometer;
    //               autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //       allowfullscreen></iframe>
    //   </div>
    //   <iframe title="um" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcristianofollowers%2Fposts%2F1709901245886320&show_text=true&width=500"
    //     width="500" height="600" scrolling="no"
    //     frameborder="0" allowfullscreen="true"
    //     allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    //   <iframe title="me" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCoachCmpunk%2Fposts%2F2045496795602330&show_text=true&width=500"
    //     width="500" height="590"
    //     scrolling="no" frameborder="0" allowfullscreen="true"
    //     allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    //   <iframe title="my" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr%2Fposts%2F1310044239398307&show_text=true&width=500" width="500" height="510"
    //     scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    //   <iframe title="em" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FBleacherReportFootball%2Fposts%2F400124244803820&show_text=true&width=500" width="500" height="615" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    // </div>
    <div className="widgets">
      {/* https://developers.facebook.com/docs/plugins/page-plugin/ */}
      <iframe
        title="widgets"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="340"
        height="70%"
        // height="300px"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default Widgets;
