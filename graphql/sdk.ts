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
export const TemplateAboutDocument = gql`
    query TemplateAbout($uri: String!) {
  pageBy(uri: $uri) {
    title
    content
    globalHero {
      globalHeroBackgroundImage {
        node {
          id
          title
          altText
          sourceUrl
        }
      }
    }
    aboutSection {
      aboutType
      aboutSection {
        aboutImage {
          node {
            id
            title
            altText
            sourceUrl
          }
        }
        aboutSubTitle
        aboutTitle
        aboutDescription
        aboutBigHeading
        aboutAuthor {
          logo {
            node {
              id
              title
              altText
              sourceUrl
            }
          }
          name
          position
        }
      }
    }
    whyChooseUsSection {
      whyChooseUsImage {
        node {
          id
          title
          altText
          sourceUrl
        }
      }
      whyChooseUsSubTitle
      whyChooseUsTitle
      whyChooseUsDescription
      whyChooseUsAccordion {
        title
        content
      }
    }
    logosBrands {
      brands {
        image {
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
}
    `;
export type TemplateAboutQueryResult = Apollo.QueryResult<TemplateAboutQuery, TemplateAboutQueryVariables>;
export const TemplateArticlesPostDocument = gql`
    query TemplateArticlesPost($first: Int!, $after: String) {
  articles(first: $first, after: $after) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    nodes {
      title
      content
      customArticle {
        thumbnail {
          node {
            id
            title
            altText
            sourceUrl
          }
        }
      }
      articleCategories {
        nodes {
          id
          name
          slug
          uri
        }
      }
      articleTags {
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
export type TemplateArticlesPostQueryResult = Apollo.QueryResult<TemplateArticlesPostQuery, TemplateArticlesPostQueryVariables>;
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
    query TemplateHome($uri: String!) {
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
      aboutType
      aboutSection {
        aboutImage {
          node {
            id
            title
            altText
            sourceUrl
          }
        }
        aboutSubTitle
        aboutTitle
        aboutDescription
        aboutBigHeading
        aboutAuthor {
          logo {
            node {
              id
              title
              altText
              sourceUrl
            }
          }
          name
          position
        }
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
    ourExperienceSection {
      ourExperienceImage {
        node {
          id
          title
          altText
          sourceUrl
        }
      }
      ourExperienceSubTitle
      ourExperienceTitle
      ourExperienceDescription
      ourExperienceProgress {
        title
        percent
      }
    }
    company {
      companyInfo {
        icon
        title
        description
      }
    }
    contactSection {
      contactTitle
      contactImage {
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