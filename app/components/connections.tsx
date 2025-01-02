'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

type Node = {
  id: string;
  label: string;
  url: string;
  labelPosition?: 'right' | 'left' | 'top' | 'bottom';
};

type Link = {
  source: string;
  target: string;
  strength: number;
};

const Connections: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mediaQuery.addEventListener('change', handler);
    
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    const resizeObserver = new ResizeObserver(updateDimensions);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!svgRef.current || !dimensions.width || !dimensions.height) return;

    d3.select(svgRef.current).selectAll("*").remove();

    const nodes: Node[] = [
      { id: "vaccination", label: "Vaccination Efforts", url: "https://www.cfr.org/in-brief/latin-americas-vaccination-efforts-what-know", labelPosition: "right" },
      { id: "coup", label: "Coup Risk", url: "https://politicalviolenceataglance.org/2022/06/14/reflecting-on-coup-risk-in-mali", labelPosition: "right" },
      { id: "anticoup", label: "Anti-Coup Strategies", url: "https://www.justsecurity.org/82471/anti-coup-strategies-should-address-civilian-coup-allies", labelPosition: "left" },
      { id: "digital", label: "Digital Transformation", url: "https://www.newamerica.org/digital-impact-governance-initiative/reports/digital-transformation-opportunities-and-challenges-in-the-lower-mekong-region", labelPosition: "right" },
      { id: "data", label: "Integrated Data", url: "https://www.newamerica.org/digital-impact-governance-initiative/blog/integrated-data-in-the-united-states-a-look-at-new-yorks-workforce-portal", labelPosition: "left" },
      { id: "infrastructure", label: "Public Infrastructure", url: "https://www.newamerica.org/digital-impact-governance-initiative/blog/what-is-digital-public-infrastructure-a-top-10-reading-guide/", labelPosition: "right" },
      { id: "quantitative", label: "Quantitative Research", url: "https://theloop.ecpr.eu/interdisciplinary-social-science-and-the-limits-of-quantitative-research", labelPosition: "right" },
      { id: "ai", label: "Artificial Intelligence", url: "https://theloop.ecpr.eu/the-threat-of-artificial-intelligence-is-not-just-real-its-here", labelPosition: "left" }
    ];

    const links: Link[] = [
      { source: "vaccination", target: "data", strength: 1 },
      { source: "vaccination", target: "infrastructure", strength: 1 },
      { source: "coup", target: "anticoup", strength: 2 },
      { source: "coup", target: "quantitative", strength: 1 },
      { source: "digital", target: "ai", strength: 2 },
      { source: "digital", target: "data", strength: 2 },
      { source: "data", target: "quantitative", strength: 2 },
      { source: "data", target: "ai", strength: 1 },
      { source: "infrastructure", target: "digital", strength: 1 }
    ];

    const nodeRadius = 5;
    const fontSize = 12;
    const linkDistance = 30;

    const colors = {
      nodeColor: isDark ? '#64748b' : '#4b5563',
      nodeHoverColor: isDark ? '#e2e8f0' : '#1f2937',
      linkColor: isDark ? '#334155' : '#94a3b8',
      textColor: isDark ? '#f8fafc' : '#0f172a'
    };

    const svg = d3.select(svgRef.current)
      .attr("viewBox", [
        -dimensions.width / 3,
        -dimensions.height / 3,
        dimensions.width * 0.8,
        dimensions.height * 0.8
      ]);

    const simulation = d3.forceSimulation(nodes as any)
      .force("link", d3.forceLink(links).id((d: any) => d.id)
        .distance(linkDistance))
      .force("charge", d3.forceManyBody().strength(-150))
      .force("center", d3.forceCenter(0, 0))
      .force("x", d3.forceX().strength(0.1))
      .force("y", d3.forceY().strength(0.1))
      .force("collision", d3.forceCollide().radius(nodeRadius * 2.5));

    const link = svg.append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", colors.linkColor)
      .attr("stroke-width", 1)
      .attr("stroke-opacity", 0.6);

    const node = svg.append("g")
      .selectAll("g")
      .data(nodes)
      .join("g");

    node.append("circle")
      .attr("r", nodeRadius * 2)
      .attr("fill", "transparent")
      .style("cursor", "pointer")
      .on("mouseover", function(this: SVGCircleElement) {
        const parent = this.parentElement;
        if (parent) {
          d3.select(parent).select(".visible-node")
            .transition()
            .duration(200)
            .attr("fill", colors.nodeHoverColor);
        }
      })
      .on("mouseout", function(this: SVGCircleElement) {
        const parent = this.parentElement;
        if (parent) {
          d3.select(parent).select(".visible-node")
            .transition()
            .duration(200)
            .attr("fill", colors.nodeColor);
        }
      })
      .on("click", (event, d: any) => {
        event.preventDefault();
        window.location.href = d.url;
      });

    node.append("circle")
      .attr("class", "visible-node")
      .attr("r", nodeRadius)
      .attr("fill", colors.nodeColor);

    node.append("text")
      .attr("fill", colors.textColor)
      .attr("font-size", `${fontSize}px`)
      .attr("text-anchor", d => d.labelPosition === 'left' ? 'end' : 'start')
      .attr("x", d => {
        switch(d.labelPosition) {
          case 'left': return -nodeRadius - 8;
          case 'right': return nodeRadius + 8;
          default: return nodeRadius + 8;
        }
      })
      .attr("y", "0.31em")
      .attr("pointer-events", "none")
      .text(d => d.label);

    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    });

    function drag(simulation: d3.Simulation<any, undefined>) {
      function dragstarted(event: any) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }

      function dragged(event: any) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }

      function dragended(event: any) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }

      return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }

    node.call(drag(simulation) as any);

    return () => {
      simulation.stop();
    };
  }, [dimensions, isDark]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-64 mx-auto max-w-3xl transition-colors duration-300"
    >
      <svg 
        ref={svgRef}
        className="w-full h-full touch-none"
      />
    </div>
  );
};

export default Connections;