"use client"

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"

import { Badge } from "@/components/ui/badge"
import type { Project } from "@/types/site"

const AUTO_ROTATE_MS = 6000
const CARD_FADE_MS = 280
const CARD_ENTER_DELAY_MS = 24

const projectBannerTone: Record<string, string> = {
  Signet: "featured",
  Bracket: "bracket",
}

function getProjectMark(project: Project) {
  return project.brand === "bracket"
    ? "/bracket/bracket-logomark-transparent.svg"
    : "/logo-mark.svg"
}

function getProjectRole(project: Project) {
  return project.brand === "bracket"
    ? "Operations software"
    : "Primary infrastructure"
}

function getProjectCardClass(project: Project, isActive: boolean) {
  return [
    "banner-project-card",
    project.brand,
    projectBannerTone[project.title] ?? "",
    isActive ? "is-active" : "",
  ]
    .filter(Boolean)
    .join(" ")
}

type ProjectRotatorProps = {
  projects: Project[]
}

export function ProjectRotator({ projects }: ProjectRotatorProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isCardVisible, setIsCardVisible] = useState(true)
  const fadeTimeoutRef = useRef<number | null>(null)
  const enterTimeoutRef = useRef<number | null>(null)
  const projectCount = projects.length

  const clearTransitionTimers = useCallback(() => {
    if (fadeTimeoutRef.current !== null) {
      window.clearTimeout(fadeTimeoutRef.current)
      fadeTimeoutRef.current = null
    }

    if (enterTimeoutRef.current !== null) {
      window.clearTimeout(enterTimeoutRef.current)
      enterTimeoutRef.current = null
    }
  }, [])

  const goTo = useCallback(
    (index: number) => {
      if (projectCount === 0 || !isCardVisible) {
        return
      }

      const nextIndex = (index + projectCount) % projectCount

      if (nextIndex === activeIndex) {
        return
      }

      clearTransitionTimers()
      setIsCardVisible(false)

      fadeTimeoutRef.current = window.setTimeout(() => {
        setActiveIndex(nextIndex)

        enterTimeoutRef.current = window.setTimeout(() => {
          setIsCardVisible(true)
          enterTimeoutRef.current = null
        }, CARD_ENTER_DELAY_MS)

        fadeTimeoutRef.current = null
      }, CARD_FADE_MS)
    },
    [activeIndex, clearTransitionTimers, isCardVisible, projectCount],
  )

  useEffect(() => {
    clearTransitionTimers()
    setActiveIndex(0)
    setIsCardVisible(true)
  }, [clearTransitionTimers, projectCount])

  useEffect(() => clearTransitionTimers, [clearTransitionTimers])

  useEffect(() => {
    if (projectCount <= 1) {
      return
    }

    const interval = window.setInterval(() => {
      goTo(activeIndex + 1)
    }, AUTO_ROTATE_MS)

    return () => window.clearInterval(interval)
  }, [activeIndex, goTo, projectCount])

  if (projectCount === 0) {
    return null
  }

  return (
    <aside
      className="hero-project-banner fade-up"
      aria-label="Rotating list of current projects"
    >
      <div className="project-banner-topline">
        <span>Working on</span>
        <span>{projectCount} active tracks</span>
      </div>

      <div className="project-banner-stage">
        {projects.map((project, index) => {
          const isActive = index === activeIndex && isCardVisible

          return (
            <a
              aria-hidden={!isActive}
              className={getProjectCardClass(project, isActive)}
              href={project.links[0]?.href ?? "#projects"}
              key={project.title}
              tabIndex={isActive ? undefined : -1}
            >
              <span className="banner-project-card-glow" aria-hidden="true" />
              <span className="banner-project-card-top">
                <span className="banner-project-mark">
                  <img src={getProjectMark(project)} alt="" />
                </span>
                <Badge variant={project.featured ? "success" : "default"}>
                  {project.status}
                </Badge>
              </span>
              <span className="banner-project-card-body">
                <span className="banner-project-role">
                  {getProjectRole(project)}
                </span>
                <strong>{project.title}</strong>
                <span>{project.tagline}</span>
              </span>
              <span className="banner-project-card-foot">
                <span>
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(projectCount).padStart(2, "0")}
                </span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </a>
          )
        })}
      </div>

      <div className="project-banner-nav">
        <div className="project-banner-rail" aria-label="Select project">
          {projects.map((project, index) => (
            <button
              aria-current={
                index === activeIndex && isCardVisible ? "true" : undefined
              }
              aria-label={`Show ${project.title}`}
              className={
                index === activeIndex && isCardVisible ? "is-active" : undefined
              }
              disabled={!isCardVisible}
              key={project.title}
              onClick={() => goTo(index)}
              type="button"
            />
          ))}
        </div>
        <div className="project-banner-controls">
          <button
            aria-label="Previous project"
            disabled={projectCount <= 1 || !isCardVisible}
            onClick={() => goTo(activeIndex - 1)}
            type="button"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            aria-label="Next project"
            disabled={projectCount <= 1 || !isCardVisible}
            onClick={() => goTo(activeIndex + 1)}
            type="button"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <p className="hero-status">
        <span className="status-dot" />
        Auto-rotating current work
      </p>
    </aside>
  )
}
