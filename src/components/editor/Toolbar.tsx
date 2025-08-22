// src/components/editor/Toolbar.tsx
import {
  Bold,
  Italic,
  Strikethrough,
  Image as ImageIcon,
  Link2,
  List,
  ListOrdered,
  Underline as UnderlineIcon,
  Highlighter,
} from "lucide-react";
import { Editor } from "@tiptap/react";
import { useState } from "react";
import { Level } from "@tiptap/extension-heading";

interface ToolbarProps {
  editor: Editor | null;
}

const FONT_SIZES = [
  { label: "Small", size: "12px" },
  { label: "Normal", size: "16px" },
  { label: "Large", size: "24px" },
  { label: "Huge", size: "32px" },
];

const HEADINGS = [
  { label: "Paragraph", level: null },
  { label: "Heading 1", level: 1 },
  { label: "Heading 2", level: 2 },
  { label: "Heading 3", level: 3 },
  { label: "Heading 4", level: 4 },
  { label: "Heading 5", level: 5 },
  { label: "Heading 6", level: 6 },
];

export const Toolbar = ({ editor }: ToolbarProps) => {
  const [fontSize, setFontSize] = useState("16px");
  const [headingLevel, setHeadingLevel] = useState<number | null>(null);

  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = window.prompt("Enter the URL of the image:");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    if (url === null) {
      return;
    }

    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  const toggleHeading = (level: Level | null) => {
    if (level === null) {
      editor.chain().focus().setParagraph().run();
      setHeadingLevel(null);
      return;
    }

    editor.chain().focus().toggleHeading({ level }).run();
    setHeadingLevel(level);
  };
  const setFontSizeHandler = (size: string) => {
    editor.chain().focus().setFontSize(size).run();
    setFontSize(size);
  };
  // Set text color
  const setColor = (color: string) => {
    editor.chain().focus().setColor(color).run();
  };

  // Set highlight (background) color
  const setHighlight = (color: string) => {
    editor.chain().focus().setMark("highlight", { color }).run();
  };
  return (
    <div className="flex flex-wrap gap-1 border border-input bg-background p-1 rounded-t-md items-center">
      {/* Bold */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 rounded hover:bg-accent ${
          editor.isActive("bold") ? "bg-accent" : ""
        }`}
        title="Bold"
      >
        <Bold className="h-4 w-4" />
      </button>

      {/* Italic */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 rounded hover:bg-accent ${
          editor.isActive("italic") ? "bg-accent" : ""
        }`}
        title="Italic"
      >
        <Italic className="h-4 w-4" />
      </button>

      {/* Strikethrough */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`p-2 rounded hover:bg-accent ${
          editor.isActive("strike") ? "bg-accent" : ""
        }`}
        title="Strikethrough"
      >
        <Strikethrough className="h-4 w-4" />
      </button>

      {/* Underline */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`p-2 rounded hover:bg-accent ${
          editor.isActive("underline") ? "bg-accent" : ""
        }`}
        title="Underline"
      >
        <UnderlineIcon className="h-4 w-4" />
      </button>

      {/* Highlight */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={`p-2 rounded hover:bg-accent ${
          editor.isActive("highlight") ? "bg-accent" : ""
        }`}
        title="Highlight"
      >
        <Highlighter className="h-4 w-4" />
      </button>

      {/* Bullet List */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded hover:bg-accent ${
          editor.isActive("bulletList") ? "bg-accent" : ""
        }`}
        title="Bullet List"
      >
        <List className="h-4 w-4" />
      </button>

      {/* Ordered List */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded hover:bg-accent ${
          editor.isActive("orderedList") ? "bg-accent" : ""
        }`}
        title="Ordered List"
      >
        <ListOrdered className="h-4 w-4" />
      </button>

      {/* Link */}
      <button
        type="button"
        onClick={setLink}
        className={`p-2 rounded hover:bg-accent ${
          editor.isActive("link") ? "bg-accent" : ""
        }`}
        title="Insert Link"
      >
        <Link2 className="h-4 w-4" />
      </button>

      {/* Image */}
      <button
        type="button"
        onClick={addImage}
        className="p-2 rounded hover:bg-accent"
        title="Insert Image"
      >
        <ImageIcon className="h-4 w-4" />
      </button>
      {/* Text Color */}
      <button
        type="button"
        onClick={() => setColor("red")}
        className="p-2 rounded hover:bg-accent"
        style={{ color: "red" }}
        title="Red Text"
      >
        A
      </button>
      <button
        type="button"
        onClick={() => setColor("black")}
        className="p-2 rounded hover:bg-accent"
        style={{ color: "black" }}
        title="Black Text"
      >
        A
      </button>

      {/* Highlight Color */}
      <button
        type="button"
        onClick={() => setHighlight("red")}
        className="p-2 rounded hover:bg-accent"
        style={{ backgroundColor: "red", color: "white" }}
        title="Red Highlight"
      >
        H
      </button>
      <button
        type="button"
        onClick={() => setHighlight("black")}
        className="p-2 rounded hover:bg-accent"
        style={{ backgroundColor: "black", color: "white" }}
        title="Black Highlight"
      >
        H
      </button>

      <select
        value={headingLevel ?? ""}
        onChange={(e) => {
          const value = e.target.value;
          if (value === "") {
            toggleHeading(null);
          } else {
            const level = Number(value) as 1 | 2 | 3 | 4 | 5 | 6;
            toggleHeading(level);
          }
        }}
        className="border border-input rounded p-1 text-sm"
        title="Heading Level"
      >
        {HEADINGS.map(({ label, level }) => (
          <option key={label} value={level ?? ""}>
            {label}
          </option>
        ))}
      </select>

      {/* Font Size Selector */}
      <select
        value={fontSize}
        onChange={(e) => setFontSizeHandler(e.target.value)}
        className="border border-input rounded p-1 text-sm"
        title="Font Size"
      >
        {FONT_SIZES.map(({ label, size }) => (
          <option key={size} value={size}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
