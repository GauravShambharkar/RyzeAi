import React from "react";

/*
  Human-like page scroll: flick → read → flick → read → return
  Scrollbar thumb mirrors scroll progress.
  Cursor grabs the thumb, drags it, releases — then hides.
*/
export const ScrollAnimations = () => (
  <style>{`
    @keyframes dashScroll {
      0%, 5%   { transform: translateY(0); }
      12%      { transform: translateY(-220px); }
      22%      { transform: translateY(-220px); }
      30%      { transform: translateY(-460px); }
      42%      { transform: translateY(-460px); }
      50%      { transform: translateY(-720px); }
      62%      { transform: translateY(-720px); }
      72%      { transform: translateY(-380px); }
      82%      { transform: translateY(-380px); }
      92%      { transform: translateY(0); }
      100%     { transform: translateY(0); }
    }
    @keyframes dashThumb {
      0%, 5%   { transform: translateY(0); }
      12%      { transform: translateY(90px); }
      22%      { transform: translateY(90px); }
      30%      { transform: translateY(188px); }
      42%      { transform: translateY(188px); }
      50%      { transform: translateY(296px); }
      62%      { transform: translateY(296px); }
      72%      { transform: translateY(156px); }
      82%      { transform: translateY(156px); }
      92%      { transform: translateY(0); }
      100%     { transform: translateY(0); }
    }
    @keyframes seoScroll {
      0%, 5%   { transform: translateY(0); }
      13%      { transform: translateY(-260px); }
      23%      { transform: translateY(-260px); }
      31%      { transform: translateY(-520px); }
      43%      { transform: translateY(-520px); }
      51%      { transform: translateY(-820px); }
      63%      { transform: translateY(-820px); }
      73%      { transform: translateY(-420px); }
      83%      { transform: translateY(-420px); }
      93%      { transform: translateY(0); }
      100%     { transform: translateY(0); }
    }
    @keyframes seoThumb {
      0%, 5%   { transform: translateY(0); }
      13%      { transform: translateY(105px); }
      23%      { transform: translateY(105px); }
      31%      { transform: translateY(210px); }
      43%      { transform: translateY(210px); }
      51%      { transform: translateY(330px); }
      63%      { transform: translateY(330px); }
      73%      { transform: translateY(170px); }
      83%      { transform: translateY(170px); }
      93%      { transform: translateY(0); }
      100%     { transform: translateY(0); }
    }
    @keyframes cursorCycle {
      0%, 3%   { opacity: 0; left: calc(100% - 28px); top: 210px; scale: 1; }
      4%       { opacity: 1; left: calc(100% - 28px); top: 210px; scale: 1; }
      5%       { opacity: 1; left: calc(100% - 28px); top: 210px; scale: 0.8; }
      12%      { opacity: 1; left: calc(100% - 28px); top: 300px; scale: 0.8; }
      13%      { opacity: 1; left: calc(100% - 28px); top: 300px; scale: 1; }
      15%      { opacity: 0; left: calc(100% - 28px); top: 300px; scale: 1; }
      20%      { opacity: 0; left: calc(100% - 28px); top: 300px; scale: 1; }
      21%      { opacity: 1; left: calc(100% - 28px); top: 300px; scale: 1; }
      22%      { opacity: 1; left: calc(100% - 28px); top: 300px; scale: 0.8; }
      30%      { opacity: 1; left: calc(100% - 28px); top: 398px; scale: 0.8; }
      31%      { opacity: 1; left: calc(100% - 28px); top: 398px; scale: 1; }
      33%      { opacity: 0; left: calc(100% - 28px); top: 398px; scale: 1; }
      40%      { opacity: 0; left: calc(100% - 28px); top: 398px; scale: 1; }
      41%      { opacity: 1; left: calc(100% - 28px); top: 398px; scale: 1; }
      42%      { opacity: 1; left: calc(100% - 28px); top: 398px; scale: 0.8; }
      50%      { opacity: 1; left: calc(100% - 28px); top: 506px; scale: 0.8; }
      51%      { opacity: 1; left: calc(100% - 28px); top: 506px; scale: 1; }
      53%      { opacity: 0; left: calc(100% - 28px); top: 506px; scale: 1; }
      60%      { opacity: 0; left: calc(100% - 28px); top: 506px; scale: 1; }
      61%      { opacity: 1; left: calc(100% - 28px); top: 506px; scale: 1; }
      62%      { opacity: 1; left: calc(100% - 28px); top: 506px; scale: 0.8; }
      72%      { opacity: 1; left: calc(100% - 28px); top: 366px; scale: 0.8; }
      73%      { opacity: 1; left: calc(100% - 28px); top: 366px; scale: 1; }
      75%      { opacity: 0; left: calc(100% - 28px); top: 366px; scale: 1; }
      80%      { opacity: 0; left: calc(100% - 28px); top: 366px; scale: 1; }
      81%      { opacity: 1; left: calc(100% - 28px); top: 366px; scale: 1; }
      82%      { opacity: 1; left: calc(100% - 28px); top: 366px; scale: 0.8; }
      92%      { opacity: 1; left: calc(100% - 28px); top: 210px; scale: 0.8; }
      93%      { opacity: 1; left: calc(100% - 28px); top: 210px; scale: 1; }
      95%, 100%{ opacity: 0; left: calc(100% - 28px); top: 210px; scale: 1; }
    }
    @keyframes monitoringPop {
      0%, 18% { opacity: 0; transform: scale(0.95) translateY(10px); pointer-events: none; }
      22%, 95% { opacity: 1; transform: scale(1) translateY(0); pointer-events: auto; }
      100% { opacity: 0; transform: scale(0.95) translateY(10px); pointer-events: none; }
    }
  `}</style>
);
