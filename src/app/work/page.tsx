"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { featuredRepos } from "@/constants";
import FeaturedProjects from "../../components/FeaturedProjects";
import AllProjects from "../../components/AllProjects";
import { Container } from "@/components/Container";

export default function WorkPage() {
  interface Project {
    title: string;
    description: string;
    stack: string[];
    tags: string[];
    links: { href: string; label: string }[];
  }

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);

  // Load envs
  const GIT_UNAME = process.env.NEXT_PUBLIC_GIT_UNAME;
  const GIT_TOKEN = process.env.NEXT_PUBLIC_GIT_TOKEN;

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.github.com/users/${GIT_UNAME}/repos`,
        {
          headers: {
            Authorization: `Bearer ${GIT_TOKEN}`,
          },
        }
      );

      interface Repo {
        name: string;
        description: string;
        languages_url: string;
        tags_url: string;
        html_url: string;
      }

      interface LanguageResponse {
        [key: string]: number;
      }

      interface Tag {
        name: string;
      }

      const formattedData: Project[] = await Promise.all(
        (response.data as Repo[]).map(async (repo: Repo) => {
          const languages: string[] = await axios
        .get<LanguageResponse>(repo.languages_url, {
          headers: {
            Authorization: `Bearer ${GIT_TOKEN}`,
          },
        })
        .then((res) => Object.keys(res.data))
        .catch(() => []);

          const tags: string[] = await axios
        .get<Tag[]>(repo.tags_url, {
          headers: {
            Authorization: `Bearer ${GIT_TOKEN}`,
          },
        })
        .then((res) => res.data.map((tag) => tag.name))
        .catch(() => []);

          return {
        title: repo.name,
        description: repo.description || "No description available.",
        stack: languages,
        tags: tags.length > 0 ? tags : ["Uncategorized"],
        links: [{ href: repo.html_url, label: "Source Code" }],
          };
        })
      );

      setProjects(formattedData);
    } catch (error) {
      alert("Error fetching projects:"+  error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const featuredProjects = projects.filter((project) =>
    featuredRepos.some((featured) => featured.name === project.title)
  );

  return (
    <div className="bg-bodyColor text-white/80">
      <Container className="bg-bodyColor text-white/80 py-20 min-h-screen min-w-100vh content-center px-2">
        <h1 className="text-3xl text-center md:text-5xl font-bold text-lightSky">
          My Work
        </h1>
        <h4 className="text-center text-white/70 text-lg md:text-xl mt-2">
          Explore my portfolio, where I showcase a selection of past projects.
          From web development to creative design, each project reflects my
          commitment to quality, innovation, and problem-solving.
        </h4>
        {loading ? (
          <div className="mt-4 text-center text-sm text-lightSky">Loading...</div>
        ) : (
          <div>
            <FeaturedProjects projects={featuredProjects} />
            <AllProjects projects={projects} />
          </div>
        )}
      </Container>
    </div>
  );
}
