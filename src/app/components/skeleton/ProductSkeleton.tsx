import React from "react";

export default function ProductSkeleton() {
  return (
    <div className="col-md-3">
      <div className="card shadow-sm border-0 rounded-4 p-3">
        <div className="skeleton skeleton-img mb-3"></div>
        <div className="skeleton skeleton-text mb-2"></div>
        <div className="skeleton skeleton-text w-75 mb-2"></div>
        <div className="skeleton skeleton-btn w-50"></div>
      </div>
    </div>
  );
}
