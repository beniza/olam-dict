# Olam - ഓളം

**A living dictionary for Malayalam** | വാക്കുകളുടെ സമുദ്രം

Open-source, community-driven Malayalam-English dictionary platform with 180,000+ entries from multiple authoritative sources.

## Project Overview

Olam is reimagining Malayalam lexicography for the digital age, combining traditional dictionary scholarship with modern web design and artificial intelligence.

### Olam 2.0 Concept

The files in this repository represent **design concepts and mockups** for the future Olam 2.0 platform:

- **Search-first architecture** with prominent, accessible interface
- **Multi-source aggregation** from 5 dictionaries (Gundert, Sabdatharavali, Bailey, Datuk, WordNet)
- **Linguistic features**: Etymology, morphological parsing, semantic relations
- **Educational scaffolding**: Spelling corrections, orthographic variants, usage examples
- **Modern design**: Glassmorphism aesthetics with responsive, accessible UI
- **Malayalam-first**: Authentic Malayalam content throughout

> **Note**: Olam 2.0 is currently in the concept/design phase. The HTML and CSS files are visual mockups demonstrating the proposed user experience and features.

## Features

### Dictionary Sources
- **Gundert (1872)** - Foundational Malayalam-English dictionary
- **Sabdatharavali (STV)** - Comprehensive modern reference
- **Bailey's Dictionary** - Historical bilingual lexicon
- **Datuk Dictionary** - Contemporary usage
- **Malayalam WordNet** - Semantic network and synsets

### Linguistic Tools
- **Morphology Analysis** - Powered by mlmorph (inflected form → lemma)
- **Etymology** - Word origins from Sanskrit, Dravidian, PIE roots
- **Semantic Relations** - Synonyms, antonyms, hypernyms, hyponyms
- **Spelling Guidance** - Correct forms vs common errors
- **VisuWords Graph** - Visual semantic exploration

### User Experience
- **Responsive Design** - Mobile-first with fluid typography
- **Accessibility** - WCAG 2.1 AA compliant
- **Modern UI** - Gradient heroes, glassmorphism effects, color-coded information
- **Multiple Search Modes** - Dictionary, Translation, Spell Check, Audio

## Project Structure

```
olam/
├── presentation/
│   ├── olam2.css                    # Design system for Olam 2.0 concept
│   └── olam2-claude.html/css        # Full mockup of proposed Olam 2.0 interface
├── olam2-rebuild-prompt.json        # Complete project documentation and vision
└── README.md                        # This file
```

> **Status**: All files are design mockups and documentation for the planned Olam 2.0. Implementation has not yet begun.

## Vision Documents

### `olam2-rebuild-prompt.json`

Comprehensive 50KB+ JSON documentation containing:
- Complete design philosophy and user journey requirements
- Technical specifications (HTML5, CSS architecture, fonts)
- Detailed breakdown of all 10 page sections
- Data models and linguistic feature specifications
- 20-step recreation instructions
- **Olam 3.0 Vision** - Future research directions

## Olam 3.0 Vision

Two revolutionary concepts for next-generation Malayalam lexicography:

### 1. Dictionary Data as Modules
- Treat each dictionary as independent, pluggable module
- npm-style registry: `@olam/gundert`, `@olam/medical-terms`
- Community-contributed specialized dictionaries
- Version control for lexical data
- Hot-swappable sources

### 2. Dictionary in the AI Era
- **Contextual definition selection** - AI shows relevant sense based on context
- **Semantic search** - Search by meaning, not just spelling
- **Intelligent examples** - AI generates usage examples
- **Pronunciation coaching** - Personalized feedback
- **Conversational interface** - Ask questions in natural language
- **Real-time corpus insights** - Track word usage evolution

## Technology Stack

### Current (Olam 2.0 Concept)
- HTML5 with semantic markup
- CSS3 with custom properties
- Responsive design (mobile-first)
- Fonts: RaghuMalayalamSans, DM Sans, Playfair Display

### Planned (Olam 2.0 Implementation)
- React/Vue for modular architecture
- FastAPI + LangChain for AI features
- Malayalam BERT for semantic search
- Vector database (Pinecone/Weaviate)
- Fine-tuned GPT models for generation

## Design System

### Color Palette
- **Indigo** `#3c5dff` - Primary accent (dictionary content, CTAs)
- **Teal** `#00a7a7` - Linguistic features (morphology, etymology)
- **Coral** `#ff7a6b` - Community and engagement
- **Green** `#10b981` - Correctness indicators
- **Red** `#ef4444` - Error warnings

### Typography
- **Malayalam**: RaghuMalayalamSans
- **Headings**: Playfair Display (serif)
- **Body**: DM Sans (sans-serif)
- **Technical**: JetBrains Mono (monospace for IPA)

## Getting Started

### Viewing the Olam 2.0 Mockup

1. Open `presentation/olam2-claude.html` in a browser to see the full design concept
2. Review `olam2-rebuild-prompt.json` for complete documentation and implementation specs
3. Explore modular architecture and AI vision for future Olam 3.0

### Building Olam 2.0

The `olam2-rebuild-prompt.json` file contains comprehensive specifications for implementing Olam 2.0, including:
- 20-step recreation instructions
- Complete technical specifications
- Data models and API requirements
- Design system tokens and components

## Standards & Compliance

- **TEI P5** - Text Encoding Initiative for dictionary entries
- **SIL LIFT** - Lexicon Interchange Format
- **Unicode 15.0** - Full Malayalam block support
- **WordNet** - Semantic network integration
- **WCAG 2.1 AA** - Web accessibility standards

## Community

- **Contributor** - Add entries, improve definitions
- **Reviewer** - Verify accuracy, validate sources
- **Developer** - Build tools, extend platform
- **Researcher** - Linguistic analysis, corpus studies

## License

Dictionary content: Various licenses (see individual sources)
- Gundert: Public Domain
- WordNet: Open Source

Platform code: [To be specified]

## Acknowledgments

- Hermann Gundert - Foundational Malayalam lexicography
- Sreekanteswaram Padmanabha Pillai - Sabdatharavali
- Swathanthra Malayalam Computing (SMC) - mlmorph, fonts
- Malayalam WordNet team
- Community contributors and reviewers

---

**Status**: 
- **Olam 1.0**: Production (olam.in)
- **Olam 2.0**: Concept/Design Phase (this repository - mockups only)
- **Olam 3.0**: Vision Documentation (future research)

**Contact**: Indian Digital Archive Foundation

**Repository**: beniza/olam-dict
