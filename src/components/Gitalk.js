import React, { useEffect, useState } from "react";
import "gitalk/dist/gitalk.css";
import GT from "gitalk";
import styled from "styled-components";

const DevWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: 1rem;
  border: 1px solid #ddd;
`;
const GTContainer = styled.div`
  .gt-btn {
    border-color: #333;
    background-color: #000;
    &:hover {
      border-color: #666;
      background-color: #000;
    }
  }
  .gt-btn-preview {
    color: #ccc;
  }
  .gt-header-controls-tip,
  .gt-comment-username,
  a,
  .gt-link {
    color: #222;
    border-bottom-color: #ccc;
    &:hover {
      color: #666;
      border-bottom-color: #333;
    }
  }
  .gt-svg svg,
  .gt-user .is--poping .gt-ico svg {
    fill: #333;
  }
`;
export default function Gitalk() {
  const [isProd] = useState(process.env.NODE_ENV == "production");
  // const [isProd] = useState(process.env.NODE_ENV == 'development');
  useEffect(() => {
    if (isProd) {
      const language =
        navigator.language === "zh-CN" ? navigator.language : "en";
      const gitalk = new GT({
        clientID: "095fb192736d86fc2d55",
        clientSecret: "1d437afba62a43c0474c90cd8229617c558ac693",
        repo: "d2-tech",
        owner: "d2fe",
        admin: ["d2fe"],
        language,
        id: location.pathname, // Ensure uniqueness and length less than 50
        distractionFreeMode: false // Facebook-like distraction free mode
      });
      gitalk.render("gitalk-container");
    }
  }, [isProd]);
  return isProd ? (
    <GTContainer id="gitalk-container" />
  ) : (
    <DevWrapper>开发环境不加载评论组件</DevWrapper>
  );
}
