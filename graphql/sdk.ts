import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export const GetFooterPageDocument = gql`
    query getFooterPage {
  customFooter {
    footer {
      footerBackground {
        node {
          link
          title
          uri
        }
      }
      footerLogo {
        node {
          link
          title
          uri
        }
      }
      description
      followUsSection {
        title
        socialMedia {
          iconTitle
          show
        }
      }
      quickLinksSection {
        title
        menus {
          title
          url
        }
      }
      contactInfoSection {
        title
        contactInfo {
          icon
          title
          description
        }
      }
    }
  }
}
    `;
export type GetFooterPageQueryResult = Apollo.QueryResult<GetFooterPageQuery, GetFooterPageQueryVariables>;
export const GetHeaderPageDocument = gql`
    query getHeaderPage {
  customHeader {
    header {
      headerBackgroundColor
      logo {
        node {
          link
          title
          uri
        }
      }
      menus {
        title
        url
      }
      cart {
        title
        url
      }
    }
  }
}
    `;
export type GetHeaderPageQueryResult = Apollo.QueryResult<GetHeaderPageQuery, GetHeaderPageQueryVariables>;
export const TemplateCaseStudiesPostDocument = gql`
    query TemplateCaseStudiesPost {
  caseStudies {
    nodes {
      title
      content
      uri
      slug
      caseStudies {
        thumbnail {
          node {
            id
            title
            altText
            sourceUrl
          }
        }
        category
        projectName
        skills
        completeDate
        client
      }
      caseStudyCategories {
        nodes {
          id
          name
          slug
          uri
        }
      }
    }
  }
}
    `;
export type TemplateCaseStudiesPostQueryResult = Apollo.QueryResult<TemplateCaseStudiesPostQuery, TemplateCaseStudiesPostQueryVariables>;
export const TemplateCaseStudyByPostDocument = gql`
    query TemplateCaseStudyByPost($slug: String!) {
  caseStudyBy(slug: $slug) {
    title
    content
    uri
    slug
    caseStudies {
      thumbnail {
        node {
          id
          title
          altText
          sourceUrl
        }
      }
      category
      projectName
      skills
      completeDate
      client
    }
    caseStudyCategories {
      nodes {
        id
        name
        slug
        uri
      }
    }
  }
}
    `;
export type TemplateCaseStudyByPostQueryResult = Apollo.QueryResult<TemplateCaseStudyByPostQuery, TemplateCaseStudyByPostQueryVariables>;
export const TemplateHomeDocument = gql`
    query TemplateHome($uri: String! = "home") {
  pageBy(uri: $uri) {
    title
    content
    heroSection {
      heroSection {
        heroTitle
        heroDescription
        heroCard {
          title
          description
        }
        heroSubTitle
        heroBackground {
          node {
            id
            title
            altText
            sourceUrl
          }
        }
        buttons {
          title
          link
          backgroundColor
        }
      }
    }
    aboutSection {
      aboutSection {
        aboutImage {
          node {
            id
            title
            altText
            sourceUrl
          }
        }
        aboutTitle
        aboutDescription
        aboutBigHeading
      }
    }
    ourServicesSection {
      ourServicesBackground {
        image {
          node {
            id
            title
            altText
            sourceUrl
          }
        }
        color
      }
      ourServicesSubTitle
      ourServicesTitle
      ourServicesServices {
        icon
        title
        description
        url
      }
    }
    caseStudiesSection {
      caseStudiesSubTitle
      caseStudiesTitle
    }
    processSection {
      processSubTitle
      processTitle
      stepProgressInfo {
        title
        description
      }
    }
    testimonialSection {
      testimonialSubTitle
      testimonialTitle
      testimonialBackgroundImage {
        node {
          id
          title
          altText
          sourceUrl
        }
      }
    }
  }
}
    `;
export type TemplateHomeQueryResult = Apollo.QueryResult<TemplateHomeQuery, TemplateHomeQueryVariables>;
export const TemplateTestimonialByPostDocument = gql`
    query TemplateTestimonialByPost($slug: String!) {
  testimonialBy(slug: $slug) {
    title
    content
    uri
    slug
    testimonialPost {
      testimonialThumbnail {
        node {
          id
          title
          altText
          sourceUrl
        }
      }
      testimonialPosition
    }
  }
}
    `;
export type TemplateTestimonialByPostQueryResult = Apollo.QueryResult<TemplateTestimonialByPostQuery, TemplateTestimonialByPostQueryVariables>;
export const TemplateTestimonialsPostDocument = gql`
    query TemplateTestimonialsPost {
  testimonials {
    nodes {
      title
      content
      uri
      slug
      testimonialPost {
        testimonialThumbnail {
          node {
            id
            title
            altText
            sourceUrl
          }
        }
        testimonialPosition
      }
    }
  }
}
    `;
export type TemplateTestimonialsPostQueryResult = Apollo.QueryResult<TemplateTestimonialsPostQuery, TemplateTestimonialsPostQueryVariables>;