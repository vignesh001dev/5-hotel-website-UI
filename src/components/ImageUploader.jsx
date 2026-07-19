import React from 'react'

export default function ImageUploader({ rooms, setRooms }) {
  const handleFile = (index, file) => {
    if (!file) return
    const url = URL.createObjectURL(file)
    setRooms((prev) => prev.map((r, i) => (i === index ? { ...r, image: url } : r)))
  }
  return (
    <div className="uploader">
      <small>Replace room images (local preview only)</small>
      <div className="uploader-list">
        {rooms.map((r,  idx) => (
          <label className="uploader-item" key={r.id}>
            <img src={r.image} alt={r.name} className="uploader-thumb" />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFile(idx, e.target.files?.[0])}
            />
            <div className="uploader-label">{r.name}</div>
          </label>
        ))}
      </div>
    </div>
  )
}