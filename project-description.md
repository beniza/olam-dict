## Research Notes – Olam & Reference Collections (as of 31 Oct 2025)

### Snapshot of Olam.in
- Flagship Malayalam lexicography portal operated by Indic Archive Foundation (parent of gpura.org and Granthappura).
- Core offerings today focus on English↔Malayalam and Malayalam↔Malayalam lookups, exposed via web, Android (Artham), iOS, and browser extensions.
- Built with the open-source DictPress stack; key datasets already public:
	- **Olam English–Malayalam dataset** – >58k English lemmas, ~125k Malayalam definitions (crowd-sourced, continuously growing).
	- **The Datuk Corpus** – Malayalam–Malayalam dictionary data covering ~83k Malayalam headwords with 106k definitions.
- Strengths: speed, community contributions, transliteration/typing aids, APIs; Weaknesses: uneven provenance and editorial oversight across entries given mixed sourcing.

### Digitized Malayalam Dictionaries on gpura.org (Granthappura)
- Dedicated collection: `വിവിധ നിഘണ്ടുക്കളുടെ ശേഖരം` (Various Dictionaries) – 12,774 pages spanning 19th–20th century lexicography.
- Representative holdings relevant for Olam enrichment:
	- **1849 – “A Dictionary, English and Malayalim” (Benjamin Bailey)** – Church Mission Press, Kottayam; foundational bilingual work.
	- **1856 – “A Dictionary of the Malayalim and English… with an appendix” (Rev. E. Laseron)** – CMS Press; bidirectional coverage.
	- **1870 – “School Dictionary, English and Malayalam” (Hermann Gundert)** – Basel Mission Press; pedagogical focus.
	- **1872 – “Malayalam–English Dictionary” (Hermann Gundert)** – Basel Mission Press; landmark lexicon, 1,159pp.
	- **1871 – Prospectus for Gundert’s Malayalam–English dictionary** – contextual material on editorial aims.
	- **1867 – “Malayanma Nighandu” (Richard Collins)** – vernacular dictionary for students.
	- **1907 – “An English–Malayalam Dictionary” (Tobias Zacharias)** – Basel Mission Book & Tract Depository; expansive 1,400+ page volume.
	- **1913 – “Paryaya Nighandu” (S. Kunjikrishnapilla)** – Malayalam synonym dictionary (synonyms/thesaurus).
	- **1930 – “Sabdatharavali” Vols. 1 & 2 (Sreekandeswaram G. Padmanabha Pillai)** – comprehensive Malayalam lexicon (vol.1 1,159pp; vol.2 1,082pp).
	- **1952 – “A.R.P. Bhasha Nighandu” (3rd ed.)** – extensive Malayalam dictionary from A.R.P. Press, Kunnamkulam.
	- **1991 – “Gundert–Scaria Malayalam–English Nighandu” (Hermann Gundert & Scaria Zacharia)** – modern edition updating Gundert’s work.
- Metadata often notes repository partners (Tübingen University Library, Dharmaram College, private collections) and recent digitisation dates (several updated in 2025), signalling available high-resolution scans for text extraction/OCR.

### Dictionaries Highlighted via gundert-portal.de (Tübingen University Library)
- Portal aggregates 19th-century South Indian language materials, including Gundert’s lexicographical output and mission-era dictionaries.
- Notable digitised dictionaries accessible through the portal / OpenDigi platform:
	- **“Malayalam–Latin Dictionary”** – mission-produced bilingual reference linking Malayalam to Latin (OpenDigi shelfmark Ci XIV 123, DOI 10.20345/digitue.13116).
	- **“Kannada–Latin Dictionary”** – companion lexical resource illustrating cross-lingual missionary lexicography.
	- **Hermann Gundert’s Malayalam–English Dictionary (Basel Mission Press, 1872)** – available as high-fidelity scan for scholarly comparison.
	- Additional materials (prospectuses, grammars, bilingual wordbooks) contextualise 19th-century editorial standards and orthography decisions (e.g., Gundert’s adoption of candrakala, long/short vowel marking).
- Portal emphasises provenance, editorial history, and links to Gundert Archive Series—useful for establishing authenticity and version control when ingesting legacy dictionaries into Olam.

### Early Implications for Olam Roadmap
- **Authenticity uplift**: Integrating vetted scans/transcriptions from gpura.org and gundert-portal can ground crowd-sourced entries in authoritative sources, enabling citation-backed definitions.
- **Variant tracking**: Historic dictionaries document orthographic evolution (e.g., pre/post Gundert reforms) providing material for spelling guidance modules.
- **Corpus expansion**: Structured ingestion of synonym dictionaries (e.g., Paryaya Nighandu) and encyclopedic lexica (Sabdatharavali) can enrich semantic relations beyond current bilingual focus.
- **Collaborative opportunities**: Shared stewardship vision resonates with Indic Archive Foundation’s digitisation pipeline—potential to mobilise volunteers around proofreading/OCR correction tasks for newly digitised volumes.

### Modern Web Dictionary Benchmarks (Nov 2025)
- **Merriam-Webster & Oxford Learner’s**: Pair concise definitions with multiple example sentences, grammar/usage labels, CEFR proficiency tags, audio clips for US/UK pronunciations, frequency bars, and “recent searches” context. Paid tiers expose flashcards and quizzes.
- **Cambridge & Collins**: Emphasise collocations, idioms, phrasal verbs, and register markers; provide voice recordings, inflection tables, and bilingual toggles in one view.
- **Dictionary.com & Wordnik**: Surface trending lookups, community-contributed examples, podcast snippets, and cross-platform widgets; Wordnik also exposes API endpoints, Scrabble-style word metrics, and Twitter sourcing.
- **Macmillan & Longman**: Integrate lexical frequency from corpora, clickable word family trees, and academic word lists to guide learners toward domain-specific vocabulary.
- **Visuwords (WordNet-powered)**: Visual thesaurus that renders synsets as interactive graphs—nodes coloured by part of speech, edges representing semantic relations (hypernym, synonym, meronym, etc.), and animated layout for exploratory learning.
- **Linguee / DeepL Dictionary**: Combine authoritative definitions with aligned bilingual sentence pairs and usage statistics drawn from curated corpora.

### Lexical Data Standards & Interop Opportunities
- **Princeton WordNet / Global Wordnet**: Synset-based semantic networks capturing senses, hypernyms, meronyms, antonyms, glosses, and usage examples. Mapping Olam headwords to synsets enables graph visualisations, semantic search, and multilingual expansion via aligned wordnets (e.g., IndoWordNet, IndoWordNet-Malayalam).
- **SIL LIFT (Lexicon Interchange Format)**: XML schema used by SIL’s FieldWorks and WeSay; supports multi-script lemmas, inflectional variants, senses, semantic domains, examples with translations, audio, and editorial history. LIFT aligns well with community workflows and ensures lossless round-tripping between dictionary tools.
- **SIL Semantic Domains (RapidWords)**: Controlled vocabulary hierarchy (Life, Community, Culture, etc.) used to tag senses; facilitates thematically grouped browsing and faceted discovery.
- **Lexical Markup Framework (ISO 24613) & OntoLex-Lemon**: International standards for representing lexicons in XML/RDF, supporting interoperable APIs, linked data publishing, and alignment with knowledge graphs like Wikidata.
- **TEI Lex-0 & Dictionary Chapter**: Guidelines for encoding historical dictionary entries with rich micro-structure (etymology, citations, usage notes) preserving provenance—a fit for ingesting Gundert/Bailey transcripts.

### Feature Opportunities When Structured Data Is Adopted
- **Sense-level citations & trust signals** by linking each definition to TEI/LIFT sources, WordNet synsets, and digitised scan references.
- **Morphology-aware UX** with autogenerated paradigm tables (via `mlmorph` + LIFT inflection data) and spelling validators grounded in historic reform notes.
- **Semantic exploration tools** such as Visuwords-style graphs, semantic domain filters, and concept-to-concept navigation once WordNet/OntoLex mappings exist.
- **Cross-lingual bridges** by leveraging multilingual Wordnet links, enabling English/Malayalam ↔ Dravidian word suggestions.
- **Usage intelligence** through corpus-aligned frequency timelines and collocation panels (fed by Datuk Corpus, `mlmorph`, and future aligned corpora).
- **Contributor workflows** tracking edit history, reviewer assignments, and provenance per sense, leveraging LIFT audit trails and TEI annotations.

### Dictionary Metadata Catalog (working set)

#### 1846 — `ബെയിലിയുടെ മലയാളം – ഇംഗ്ലീഷ് നിഘണ്ടു` / *A Dictionary of High and Colloquial Malayalim and English*
- **Creators**: Benjamin Bailey
- **Publication year**: 1846
- **Publisher & place**: C.M.S. Press, Kottayam
- **Extent**: 875 pages
- **Languages covered**: Malayalam ↔ English
- **Identifiers**: gpura slug `beyiliyude-malayalam-english-nikhandu-1846`
- **Source**: https://gpura.org/item/beyiliyude-malayalam-english-nikhandu-1846 (digitised 7 Jun 2013; holding: Tübingen University Library)

#### 1849 — *A Dictionary, English and Malayalim*
- **Creators**: Benjamin Bailey
- **Publication year**: 1849
- **Publisher & place**: Church Mission Press, Cottayam
- **Extent**: 560 pages
- **Languages covered**: English ↔ Malayalam
- **Identifiers**: gpura slug `1849-english-malayalim-dictionary-benjamin-bailey`
- **Source**: https://gpura.org/item/1849-english-malayalim-dictionary-benjamin-bailey (digitised 7 Jun 2013; holding: Tübingen University Library)

#### 1855 — *Dictionarium canarense latinum: ad usum Maïssurensis Catholici Seminarii*
- **Creators**: (mission press compilation; author not listed)
- **Publication year**: 1855
- **Publisher & place**: Bangalore (Catholic Seminary of Mysore)
- **Extent**: not stated in portal metadata (noted pagination anomaly 380 → 385)
- **Languages covered**: Kannada → Latin
- **Identifiers**: Shelfmark Ci XIV 117; DOI 10.20345/digitue.13094; URN urn:nbn:de:bsz:21-dt-130942
- **Source**: https://opendigi.ub.uni-tuebingen.de/opendigi/CiXIV117 (Hermann Gundert Portal / OpenDigi)

#### 1856 — *A Dictionary of the Malayalim and English, and the English and Malayalim Languages, with an Appendix*
- **Creators**: Rev. E. Laseron
- **Publication year**: 1856
- **Publisher & place**: C.M.S. Press, Kottayam
- **Extent**: 268 pages
- **Languages covered**: Malayalam ↔ English
- **Identifiers**: gpura slug `1856-a-dictionary-malayalim-and-english-rev-e-laseron`
- **Source**: https://gpura.org/item/1856-a-dictionary-malayalim-and-english-rev-e-laseron (digitised 28 Jul 2013; holding: Tübingen University Library)

#### 1861 — *Dictionarium Latino-Canarense*
- **Creators**: Étienne-Louis Charbonnaux
- **Publication year**: 1861
- **Publisher & place**: Bangalore
- **Extent**: not stated in portal metadata
- **Languages covered**: Latin → Kannada
- **Identifiers**: Shelfmark Ci XIV 123; DOI 10.20345/digitue.13116; URN urn:nbn:de:bsz:21-dt-131164
- **Source**: https://opendigi.ub.uni-tuebingen.de/opendigi/CiXIV123 (Hermann Gundert Portal / OpenDigi)

#### 1867 — `മലയാണ്മ നിഘണ്ടു` / *A Dictionary of the Malayalim Language for the Use of Vernacular Students and Schools*
- **Creators**: Richard Collins
- **Publication year**: 1867
- **Publisher & place**: (not listed; metadata cites Dharmaram College, Bengaluru, as holding)
- **Extent**: 668 pages
- **Languages covered**: Malayalam (monolingual pedagogic dictionary)
- **Identifiers**: gpura slug `1867-malayanma-nighandu-richard-collins`
- **Source**: https://gpura.org/item/1867-malayanma-nighandu-richard-collins (digitised 2 Dec 2022)

#### 1870 — *School Dictionary, English and Malayalam*
- **Creators**: Hermann Gundert
- **Publication year**: 1870
- **Publisher & place**: Basel Mission Press, Mangalore
- **Extent**: 393 pages
- **Languages covered**: English ↔ Malayalam
- **Identifiers**: gpura slug `school-dictionary-english-and-malayalam-1870`
- **Source**: https://gpura.org/item/school-dictionary-english-and-malayalam-1870 (digitised 19 Jun 2013; holding: private Kerala collection)

#### 1872 — *Malayalam–English Dictionary* (Hermann Gundert)
- **Creators**: Hermann Gundert
- **Publication year**: 1872
- **Publisher & place**: Basel Mission Press, Mangalapuram
- **Extent**: 1,159 pages
- **Languages covered**: Malayalam ↔ English
- **Identifiers**: gpura slug `1872-malayalam-english-google-hermann-gundert`
- **Source**: https://gpura.org/item/1872-malayalam-english-google-hermann-gundert (digitised 19 Jun 2013; holding: Tübingen University Library)

#### 1907 — `ഇംഗ്ളീഷ് മലയാളം ശബ്ദകോശം` / *An English–Malayalam Dictionary*
- **Creators**: Tobias Zacharias
- **Publication year**: 1907
- **Publisher & place**: Basel Mission Book & Tract Depository, Mangalore
- **Extent**: 1,414 pages
- **Languages covered**: English ↔ Malayalam
- **Identifiers**: gpura slug `1907-english-malayalam-dictionary-tobias-zacharias`
- **Source**: https://gpura.org/item/1907-english-malayalam-dictionary-tobias-zacharias (digitised 2 Aug 2013)

#### 1913 — `പര്യായ നിഘണ്ടു`
- **Creators**: S. Kunjikrishnapilla
- **Publication year**: 1913 (Malayalam Era 1088)
- **Publisher & place**: (metadata lists Tony Antony, Kottayam, as coverage)
- **Extent**: 184 pages
- **Languages covered**: Malayalam (synonym dictionary)
- **Identifiers**: gpura slug `1913-paryaya-nighandu-s-kunjikrishnapilla`
- **Source**: https://gpura.org/item/1913-paryaya-nighandu-s-kunjikrishnapilla (digitised 30 Oct 2025)

#### 1930 — `ശബ്ദതാരാവലി` (Edition 2, Volume 1)
- **Creators**: ശ്രീകണ്ഠേശ്വരം ജി. പത്മനാഭ പിള്ള (Sreekandeswaram G. Padmanabha Pillai)
- **Publication year**: 1930
- **Publisher & place**: പ്രസിദ്ധീകരിച്ചത്: ഭാസ്കർ പ്രസ്സ്, തിരുവന്തപുരം *(per metadata, Malayalam script)*
- **Extent**: 1,159 pages
- **Languages covered**: Malayalam
- **Identifiers**: gpura slug `stvedn2vol11930padpillai`
- **Source**: https://gpura.org/item/stvedn2vol11930padpillai (digitised 7 Aug 2015)

#### 1930 — `ശബ്ദതാരാവലി` (Edition 2, Volume 2)
- **Creators**: ശ്രീകണ്ഠേശ്വരം ജി. പത്മനാഭ പിള്ള (Sreekandeswaram G. Padmanabha Pillai)
- **Publication year**: 1930
- **Publisher & place**: പ്രസിദ്ധീകരിച്ചത്: ഭാസ്കർ പ്രസ്സ്, തിരുവന്തപുരം *(per metadata, Malayalam script)*
- **Extent**: 1,082 pages
- **Languages covered**: Malayalam
- **Identifiers**: gpura slug `stvedn2vol21930padpillai`
- **Source**: https://gpura.org/item/stvedn2vol21930padpillai (digitised 11 Aug 2015)

#### 1952 — `എ.ആർ.പി. ഭാഷാനിഘണ്ടു` (പരിഷ്ക്കരിച്ച മൂന്നാം പതിപ്പ്)
- **Creators**: A.R.P. Bhasha Nighandu editorial board (A.R.P. Press, Kunnamkulam)
- **Publication year**: 1952
- **Publisher & place**: A.R.P. Press, Kunnamkulam
- **Extent**: 1,564 pages
- **Languages covered**: Malayalam (comprehensive lexicon)
- **Identifiers**: gpura slug `1952-a-r-p-bhasha-nighandu`
- **Source**: https://gpura.org/item/1952-a-r-p-bhasha-nighandu (digitised 24 Oct 2025)

#### 1971 — `ആദ്യത്തെ ഇംഗ്ലീഷ് – മലയാളം നിഘണ്ടു` (article)
- **Creators**: C.K. Moosad
- **Publication year**: 1971
- **Publisher & place**: *Adhyapakalokam* periodical (pages 25–28) — Kerala
- **Extent**: 4 pages (article documenting earliest English–Malayalam dictionary efforts)
- **Languages covered**: Malayalam
- **Identifiers**: gpura slug `1971-adyathe-english-malayalam-nighandu-c-k-moosad`
- **Source**: https://gpura.org/item/1971-adyathe-english-malayalam-nighandu-c-k-moosad

#### 1991 — `ഗുണ്ടർട്ട് – സ്കാരിയ മലയാളം – ഇംഗ്ലീഷ് നിഘണ്ടു`
- **Creators**: Hermann Gundert; Scaria Zacharia (modern editor)
- **Publication year**: 1991
- **Publisher & place**: D.C. Books, Kottayam (printed by D.C. Offset Printers)
- **Extent**: 1,192 pages
- **Languages covered**: Malayalam ↔ English
- **Identifiers**: gpura slug `1991-malayalam-english-nighandu-gundert-scaria-zacharia`
- **Source**: https://gpura.org/item/1991-malayalam-english-nighandu-gundert-scaria-zacharia (digitised 15 Mar 2025; holding: Tübingen University / Bengaluru Centre)

### Updated Presentation Blueprint (5 + 15 minutes)

> Working assumptions for the pitch: (a) Gundert Portal hosts QC’d transcripts for several dictionaries and gpura already has extraction workflows that can surface Gundert entries (potentially including transcripts); (b) Sayahna Foundation’s digital *Sabdatharavali* is Creative Commons–licensed (to be confirmed); (c) the `mlmorph` project offers thousands of machine-readable Malayalam lemmas we can align with dictionary data.

**Opening (0:00–1:00)**
- Acknowledge Kailash Nath and the Olam volunteer community; remind everyone of Olam’s reach today (web, apps, extensions) and the promise of the existing open corpora (Olam datasets + Datuk Corpus).
- Set the “authentic custodian” ambition, emphasising that we now have clean, already-transcribed sources ready for ingestion.

**Why authenticity is within reach (1:00–2:00)**
- Showcase the Gundert Portal QC pipeline and gpura extraction tooling as immediate accelerators—contrast “scan-only” ingestion vs. consuming vetted transcripts.
- Mention Sayahna’s digital *Sabdatharavali* and `mlmorph` lexeme lists as complementary assets for coverage and morphology-aware validation.

**Transformation vision (2:00–3:00)**
- Present Olam 2.0 as: citation-backed entries (Gundert, Bailey, Sabdatharavali), authoritative orthography guidance, cross-dictionary variant tracking, and machine-usable morphology hooks.
- Highlight UI/API enhancements: source badges, spell-check services, semantic layers (synonyms from *Paryaya Nighandu*, morphology from `mlmorph`).

**Execution roadmap (3:00–4:00)**
- Phase 1: Pipeline integration—link gpura/Gundert transcripts into a staging corpus; align with Sayahna data pending CC confirmation.
- Phase 2: Verification sprints—volunteer + linguist review teams; use `mlmorph` to flag orthographic anomalies; community-driven citation assignment.
- Phase 3: Product release—roll out authoritative spelling service, citation-rich API, and contributor dashboards tracking coverage by source.

**Call to action (4:00–5:00)**
- Define specific roles: data engineers to harden the gpura→Olam ETL, linguists/editors to curate spelling standards, community moderators to steward contribution governance, fundraiser/partnership lead to formalise collaboration with Sayahna and Gundert Portal.
- Invite the room to commit during the Q&A: who wants to own pilots, licensing verification, or volunteer mobilization?

**Discussion prompts for 15-minute segment**
- Source prioritisation: which transcribed dictionaries land first, and how do we blend with `mlmorph` lexical coverage?
- Licensing & partnerships: confirm Sayahna CC terms, formalise data-sharing agreements with Gundert Portal/gpura, explore co-branded releases.
- Editorial governance: design a citation + orthography review board; decide how community edits interact with authoritative layers.
- Technical backlog: transcript ingestion, schema design for multi-source citations, morphology integration, search relevance tuning.
- Sustainability: funding models (grants, institutional support), volunteer retention, documentation needs for onboarding new contributors.
