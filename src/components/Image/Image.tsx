import React, { FC } from "react";

import { graphql, StaticQuery, useStaticQuery } from "gatsby";
import {
  GatsbyImage,
  GatsbyImageProps,
  IGatsbyImageData,
} from "gatsby-plugin-image";
import { FileSystemNode } from "gatsby-source-filesystem";

interface Props extends Omit<GatsbyImageProps, "image"> {
  path: string;
}

interface Data {
  images: {
    edges: Array<{
      node: FileSystemNode & {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
    }>;
  };
}

const Image: FC<Props> = ({ path, ...rest }: Props) => {
  const data: Data = useStaticQuery(graphql`
      query {
        images: allFile(
          filter: { ext: { regex: "/png|jpg|jpeg|webp|tif|tiff/" } }
        ) {
          edges {
            node {
              absolutePath
              childImageSharp {
                gatsbyImageData(formats: [AUTO, WEBP, AVIF])
              }
            }
          }
        }
      }
    `)
    
    const { images: { edges = [] } = {} } = data;
    const image = edges.find(({ node }) => node.absolutePath.includes(path));
    
    if (!image) {
      return null;
    }

    const {
      node: { childImageSharp },
    } = image;

    return <GatsbyImage {...rest} image={childImageSharp.gatsbyImageData} />;
  }

export default Image;
