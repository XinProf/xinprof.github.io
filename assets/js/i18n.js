/* XinProf site — multilingual layer (no external dependencies).
   Default language: English. Choice persisted in localStorage.
   Arabic renders right-to-left. */
(function () {
  "use strict";

  var I18N = {
    en: {
      meta_title: `XinProf — Open-source powder XRD software`,
      meta_desc: `XinProf builds open tools for powder X-ray diffraction: phase identification, whole-pattern Rietveld refinement, .xinDB reference libraries, and MCP integrations for established refinement engines.`,
      nav_projects: `Projects`,
      nav_workflow: `Workflow`,
      nav_about: `About`,
      nav_github: `GitHub`,
      lang_label: `Select language`,
      hero_eyebrow: `Open-source powder diffraction`,
      hero_title: `From diffraction pattern to **refined structure.**`,
      hero_lead: `XinProf builds open tools for phase identification, whole-pattern fitting, reference databases and AI-agent integrations — grounded in published algorithms and open crystallographic data.`,
      btn_explore: `Explore the projects`,
      btn_repos: `All repositories`,
      hero_caption: `Observed pattern and reference peak positions for two candidate phases.`,
      stat_repos: `Public repositories`,
      stat_apps: `Desktop applications`,
      stat_mcp: `MCP integrations`,
      stat_formats: `Spectrum formats supported`,
      projects_kicker: `Projects`,
      projects_title: `A complete, open toolchain`,
      projects_intro: `Ten public repositories covering the full path from raw diffraction data to a refined crystal structure — plus the reference libraries and agent integrations that connect it all.`,
      group_core: `Core applications`,
      group_data: `Reference data`,
      group_utils: `Utilities`,
      group_mcp: `MCP integrations`,
      desc_xinmatch: `Open-source powder XRD phase-analysis platform: search-match, sequential multi-phase identification and Rietveld quantification, with a PySide6 GUI, CLI and Python library API.`,
      desc_xinrefinement: `Desktop application for whole-pattern fitting — Rietveld structural refinement, Le Bail and profile refinement, with a Qt6 GUI, CLI and Python library API.`,
      desc_database: `Build scripts, format specification and release artifacts for .xinDB v3 reference phase libraries — COD / PCOD / TCOD and Materials Project.`,
      desc_synccod: `Shared COD / PCOD / TCOD source-data root for the two database builds, with acceptance and sync tooling. The CIF data itself is not included.`,
      desc_converter: `Converts between powder diffraction spectrum formats: xy, txt, dat, csv, mdi, raw, xrdml and json.`,
      desc_synth: `Synthetic XRD pattern generator that simulates diffraction patterns to support phase identification and algorithm validation.`,
      desc_gsas: `MCP server for GSAS-II — Rietveld refinement, crystallographic analysis and protocol integration.`,
      desc_fullprof: `MCP server for FullProf — Rietveld refinement and powder diffraction analysis.`,
      desc_profex: `MCP server for Profex/BGMN — XRD analysis, search-match, COD database and Rietveld refinement.`,
      desc_maud: `MCP server for MAUD — combined diffraction analysis, texture, stress and structure analysis.`,
      tag_searchmatch: `Search–match`,
      tag_datapipeline: `Data pipeline`,
      tag_validation: `Validation`,
      tag_8formats: `8 formats`,
      tag_simulation: `Simulation`,
      repo_full: `View repository`,
      repo_short: `View`,
      workflow_kicker: `Workflow`,
      workflow_title: `How the pieces fit together`,
      workflow_intro: `Open CIF sources are indexed into reproducible reference libraries, consumed by the applications, and connected to established refinement engines through the MCP layer.`,
      workflow_caption: `From open CIF sources to phase identification and whole-pattern refinement.`,
      note1_title: `Open data in`,
      note1_text: `COD, PCOD and TCOD CIF archives feed a shared, validated data root and reproducible database builds.`,
      note2_title: `One library format`,
      note2_text: `.xinDB v3 is the single columnar reference format used across the applications.`,
      note3_title: `Agent-ready`,
      note3_text: `Four MCP servers expose established refinement engines to AI agents and automated workflows.`,
      about_kicker: `About`,
      about_title: `Built in the open, on open data`,
      about_p1: `XinProf develops powder X-ray diffraction software using a clean-room approach: behaviour is derived from official documentation, published algorithms and black-box file-format observation for interoperability.`,
      about_p2: `Reference libraries are built from the Crystallography Open Database (CC0) and other open sources. Proprietary reference databases are never redistributed. All ten repositories are public and distributed under a dual Academic + Commercial license.`,
      about_p3: `For commercial licensing or collaboration, get in touch by <a class="mail-link" href="mailto:sshztx@outlook.com">email</a>.`,
      footer_text: `© 2026 XinProf · Built with plain HTML, CSS and SVG.`,
      footer_repos: `Repositories`,
      footer_releases: `Releases`,
      footer_license: `License`,
      footer_contact: `Contact`,
      img_hero_alt: `Powder X-ray diffraction pattern with two sets of reference peak positions`,
      img_workflow_alt: `Data flow from open CIF sources through database builds to phase identification and whole-pattern refinement, with an MCP integration layer`,
      img_lattice_alt: `Crystal lattice diagram`
    },
    zh: {
      meta_title: `XinProf — 开源粉末 XRD 软件`,
      meta_desc: `XinProf 打造用于粉末 X 射线衍射的开源工具：物相鉴定、全谱 Rietveld 精密化、.xinDB 参考库，以及面向成熟精修引擎的 MCP 集成。`,
      nav_projects: `项目`,
      nav_workflow: `工作流程`,
      nav_about: `关于`,
      nav_github: `GitHub`,
      lang_label: `选择语言`,
      hero_eyebrow: `开源粉末衍射`,
      hero_title: `从衍射图谱到**精修结构**。`,
      hero_lead: `XinProf 打造开源工具，用于物相鉴定、全谱拟合、参考数据库与 AI 智能体集成——基于已发表的算法与开放晶体学数据。`,
      btn_explore: `浏览项目`,
      btn_repos: `全部代码仓库`,
      hero_caption: `两条候选物相的实验谱图与参考峰位。`,
      stat_repos: `公开代码仓库`,
      stat_apps: `桌面应用程序`,
      stat_mcp: `MCP 集成`,
      stat_formats: `支持的谱图格式`,
      projects_kicker: `项目`,
      projects_title: `一套完整的开源工具链`,
      projects_intro: `十个公开代码仓库，覆盖从原始衍射数据到精修晶体结构的完整流程——以及连接各环节的参考库与智能体集成。`,
      group_core: `核心应用`,
      group_data: `参考数据`,
      group_utils: `实用工具`,
      group_mcp: `MCP 集成`,
      desc_xinmatch: `开源粉末 XRD 物相分析平台：检索-匹配、顺序多相鉴定与 Rietveld 定量，提供 PySide6 图形界面、命令行与 Python 库 API。`,
      desc_xinrefinement: `用于全谱拟合的桌面应用——Rietveld 结构精修、Le Bail 与峰形精修，提供 Qt6 图形界面、命令行与 Python 库 API。`,
      desc_database: `.xinDB v3 参考物相库的构建脚本、格式规范与发布产物——涵盖 COD / PCOD / TCOD 与 Materials Project。`,
      desc_synccod: `供两个数据库构建共用的 COD / PCOD / TCOD 源数据根目录，包含验收与同步工具。CIF 数据本身不包含在内。`,
      desc_converter: `在粉末衍射谱图格式间转换：xy、txt、dat、csv、mdi、raw、xrdml 与 json。`,
      desc_synth: `合成 XRD 谱图生成器，模拟衍射图谱以辅助物相鉴定与算法验证。`,
      desc_gsas: `面向 GSAS-II 的 MCP 服务器——Rietveld 精密化、晶体学分析与流程集成。`,
      desc_fullprof: `面向 FullProf 的 MCP 服务器——Rietveld 精密化与粉末衍射分析。`,
      desc_profex: `面向 Profex/BGMN 的 MCP 服务器——XRD 分析、检索-匹配、COD 数据库与 Rietveld 精密化。`,
      desc_maud: `面向 MAUD 的 MCP 服务器——衍射分析、织构、应力与结构分析的综合平台。`,
      tag_searchmatch: `检索-匹配`,
      tag_datapipeline: `数据管线`,
      tag_validation: `验证`,
      tag_8formats: `8 种格式`,
      tag_simulation: `模拟`,
      repo_full: `查看仓库`,
      repo_short: `查看`,
      workflow_kicker: `工作流程`,
      workflow_title: `各模块如何协同`,
      workflow_intro: `开放的 CIF 数据源被索引为可复现的参考库，由应用程序调用，并通过 MCP 层连接成熟的精修引擎。`,
      workflow_caption: `从开放 CIF 数据源到物相鉴定与全谱精修。`,
      note1_title: `开放数据接入`,
      note1_text: `COD、PCOD 与 TCOD 的 CIF 归档汇入一个共享、经过验证的数据根目录，并用于可复现的数据库构建。`,
      note2_title: `统一库格式`,
      note2_text: `.xinDB v3 是各应用共用的单一列式参考格式。`,
      note3_title: `智能体就绪`,
      note3_text: `四个 MCP 服务器将成熟的精修引擎暴露给 AI 智能体与自动化工作流。`,
      about_kicker: `关于`,
      about_title: `基于开放数据，公开构建`,
      about_p1: `XinProf 采用洁净室方式开发粉末 X 射线衍射软件：行为来源于官方文档、已发表算法，以及为实现互操作性而进行的黑盒文件格式观测。`,
      about_p2: `参考库构建自晶体学开放数据库（CC0）及其他开放来源。专有参考数据库绝不重新分发。全部十个仓库均为公开，并在学术 + 商业双许可下分发。`,
      about_p3: `如需商业授权或合作，请通过<a class="mail-link" href="mailto:sshztx@outlook.com">电子邮件</a>与我们联系。`,
      footer_text: `© 2026 XinProf · 由纯 HTML、CSS 与 SVG 构建。`,
      footer_repos: `代码仓库`,
      footer_releases: `发布`,
      footer_license: `许可`,
      footer_contact: `联系`,
      img_hero_alt: `带有两组参考峰位的粉末 X 射线衍射图谱`,
      img_workflow_alt: `从开放 CIF 数据源经数据库构建到物相鉴定与全谱精修的数据流，含 MCP 集成层`,
      img_lattice_alt: `晶格示意图`
    },
    ja: {
      meta_title: `XinProf — オープンソースの粉末 XRD ソフトウェア`,
      meta_desc: `XinProf は粉末 X 線回折のためのオープンツールを開発しています。相同定、全パターン Rietveld 精密化、.xinDB 参照ライブラリ、そして確立された精密化エンジン向けの MCP 統合を提供します。`,
      nav_projects: `プロジェクト`,
      nav_workflow: `ワークフロー`,
      nav_about: `概要`,
      nav_github: `GitHub`,
      lang_label: `言語を選択`,
      hero_eyebrow: `オープンソースの粉末回折`,
      hero_title: `回折パターンから**精密化された構造**へ。`,
      hero_lead: `XinProf は、相同定、全パターンフィッティング、参照データベース、AI エージェント統合のためのオープンツールを開発しています。公刊されたアルゴリズムとオープンな結晶学データに基づいています。`,
      btn_explore: `プロジェクトを見る`,
      btn_repos: `すべてのリポジトリ`,
      hero_caption: `2 つの候補相に対する観測パターンと参照ピーク位置。`,
      stat_repos: `公開リポジトリ`,
      stat_apps: `デスクトップアプリ`,
      stat_mcp: `MCP 統合`,
      stat_formats: `対応するスペクトル形式`,
      projects_kicker: `プロジェクト`,
      projects_title: `完全なオープンツールチェーン`,
      projects_intro: `生の回折データから精密化された結晶構造までの全工程をカバーする 10 の公開リポジトリ。それらをつなぐ参照ライブラリとエージェント統合も含みます。`,
      group_core: `コアアプリケーション`,
      group_data: `参照データ`,
      group_utils: `ユーティリティ`,
      group_mcp: `MCP 統合`,
      desc_xinmatch: `オープンソースの粉末 XRD 相解析プラットフォーム。サーチ・マッチ、逐次多相同定、Rietveld 定量を、PySide6 GUI、CLI、Python ライブラリ API で提供します。`,
      desc_xinrefinement: `全パターンフィッティングのデスクトップアプリ。Rietveld 構造精密化、Le Bail、プロファイル精密化を、Qt6 GUI、CLI、Python ライブラリ API で提供します。`,
      desc_database: `.xinDB v3 参照相ライブラリのビルドスクリプト、フォーマット仕様、リリース成果物。COD / PCOD / TCOD と Materials Project に対応。`,
      desc_synccod: `2 つのデータベースビルドで共有する COD / PCOD / TCOD ソースデータのルート。受入れと同期のツールを含みます。CIF データそのものは含まれません。`,
      desc_converter: `粉末回折スペクトル形式間の変換：xy、txt、dat、csv、mdi、raw、xrdml、json。`,
      desc_synth: `回折パターンをシミュレーションして相同定やアルゴリズム検証を支援する合成 XRD パターン生成器。`,
      desc_gsas: `GSAS-II 向けの MCP サーバー。Rietveld 精密化、結晶学解析、プロトコル統合。`,
      desc_fullprof: `FullProf 向けの MCP サーバー。Rietveld 精密化と粉末回折解析。`,
      desc_profex: `Profex/BGMN 向けの MCP サーバー。XRD 解析、サーチ・マッチ、COD データベース、Rietveld 精密化。`,
      desc_maud: `MAUD 向けの MCP サーバー。回折解析、集合組織、応力、構造解析を統合。`,
      tag_searchmatch: `サーチ・マッチ`,
      tag_datapipeline: `データパイプライン`,
      tag_validation: `検証`,
      tag_8formats: `8 形式`,
      tag_simulation: `シミュレーション`,
      repo_full: `リポジトリを見る`,
      repo_short: `表示`,
      workflow_kicker: `ワークフロー`,
      workflow_title: `各コンポーネントの連携`,
      workflow_intro: `オープンな CIF ソースは再現可能な参照ライブラリとして索引付けされ、アプリケーションから利用され、MCP 層を通じて確立された精密化エンジンに接続されます。`,
      workflow_caption: `オープンな CIF ソースから相同定、全パターン精密化へ。`,
      note1_title: `オープンデータの入力`,
      note1_text: `COD、PCOD、TCOD の CIF アーカイブが共有され検証されたデータルートと再現可能なデータベースビルドを支えます。`,
      note2_title: `単一のライブラリ形式`,
      note2_text: `.xinDB v3 はアプリケーション全体で使われる単一のカラム型参照形式です。`,
      note3_title: `エージェント対応`,
      note3_text: `4 つの MCP サーバーが確立された精密化エンジンを AI エージェントや自動化ワークフローに公開します。`,
      about_kicker: `概要`,
      about_title: `オープンデータの上に、公開で構築`,
      about_p1: `XinProf はクリーンルーム手法で粉末 X 線回折ソフトウェアを開発しています。挙動は公式ドキュメント、公刊アルゴリズム、相互運用性のためのブラックボックスのファイル形式観察から導き出されます。`,
      about_p2: `参照ライブラリは Crystallography Open Database（CC0）ほかのオープンソースから構築されます。独自の参照データベースが再配布されることはありません。10 のリポジトリすべてが公開され、学術＋商用のデュアルライセンスで配布されています。`,
      about_p3: `商用ライセンスや共同研究については、<a class="mail-link" href="mailto:sshztx@outlook.com">メール</a>でお問い合わせください。`,
      footer_text: `© 2026 XinProf · プレーンな HTML、CSS、SVG で構築。`,
      footer_repos: `リポジトリ`,
      footer_releases: `リリース`,
      footer_license: `ライセンス`,
      footer_contact: `お問い合わせ`,
      img_hero_alt: `2 組の参照ピーク位置を持つ粉末 X 線回折パターン`,
      img_workflow_alt: `オープンな CIF ソースからデータベース構築を経て相同定と全パターン精密化へと至るデータフロー（MCP 統合層を含む）`,
      img_lattice_alt: `結晶格子図`
    },
    de: {
      meta_title: `XinProf — Open-Source-Software für Pulver-XRD`,
      meta_desc: `XinProf entwickelt offene Werkzeuge für die Pulver-Röntgenbeugung: Phasenidentifikation, vollständige Rietveld-Verfeinerung, .xinDB-Referenzbibliotheken und MCP-Integrationen für etablierte Verfeinerungs-Engines.`,
      nav_projects: `Projekte`,
      nav_workflow: `Ablauf`,
      nav_about: `Über uns`,
      nav_github: `GitHub`,
      lang_label: `Sprache wählen`,
      hero_eyebrow: `Open-Source-Pulverbeugung`,
      hero_title: `Vom Beugungsdiagramm zur **verfeinerten Struktur**.`,
      hero_lead: `XinProf entwickelt offene Werkzeuge für Phasenidentifikation, Ganz-Muster-Anpassung, Referenzdatenbanken und KI-Agent-Integration — fundiert auf veröffentlichten Algorithmen und offenen kristallographischen Daten.`,
      btn_explore: `Projekte entdecken`,
      btn_repos: `Alle Repositorys`,
      hero_caption: `Beobachtetes Muster und Referenz-Peakpositionen für zwei Kandidat-Phasen.`,
      stat_repos: `Öffentliche Repositorys`,
      stat_apps: `Desktop-Anwendungen`,
      stat_mcp: `MCP-Integrationen`,
      stat_formats: `Unterstützte Spektrenformate`,
      projects_kicker: `Projekte`,
      projects_title: `Eine vollständige, offene Werkzeugkette`,
      projects_intro: `Zehn öffentliche Repositorys, die den gesamten Weg von Rohbeugungsdaten bis zur verfeinerten Kristallstruktur abdecken — samt der Referenzbibliotheken und Agent-Integrationen, die alles verbinden.`,
      group_core: `Kernanwendungen`,
      group_data: `Referenzdaten`,
      group_utils: `Hilfsmittel`,
      group_mcp: `MCP-Integrationen`,
      desc_xinmatch: `Open-Source-Plattform zur Phasenanalyse von Pulver-XRD: Such-Abgleich, sequenzielle Mehrphasenidentifikation und Rietveld-Quantifizierung, mit PySide6-GUI, CLI und Python-Bibliotheks-API.`,
      desc_xinrefinement: `Desktop-Anwendung für die Ganz-Muster-Anpassung — Rietveld-Strukturverfeinerung, Le Bail und Profilverfeinerung, mit Qt6-GUI, CLI und Python-Bibliotheks-API.`,
      desc_database: `Build-Skripte, Formatspezifikation und Release-Artefakte für .xinDB-v3-Referenzphasenbibliotheken — COD / PCOD / TCOD und Materials Project.`,
      desc_synccod: `Gemeinsamer COD-/PCOD-/TCOD-Quelldaten-Root für die beiden Datenbank-Builds, mit Abnahme- und Synchronisierungstools. Die CIF-Daten selbst sind nicht enthalten.`,
      desc_converter: `Konvertiert zwischen Pulverbeugungs-Spektrumformaten: xy, txt, dat, csv, mdi, raw, xrdml und json.`,
      desc_synth: `Generator für synthetische XRD-Muster, der Beugungsdiagramme simuliert, um Phasenidentifikation und Algorithmusvalidierung zu unterstützen.`,
      desc_gsas: `MCP-Server für GSAS-II — Rietveld-Verfeinerung, kristallographische Analyse und Protokoll-Integration.`,
      desc_fullprof: `MCP-Server für FullProf — Rietveld-Verfeinerung und Pulverbeugungsanalyse.`,
      desc_profex: `MCP-Server für Profex/BGMN — XRD-Analyse, Such-Abgleich, COD-Datenbank und Rietveld-Verfeinerung.`,
      desc_maud: `MCP-Server für MAUD — kombinierte Beugungsanalyse, Textur, Spannung und Strukturanalyse.`,
      tag_searchmatch: `Such-Abgleich`,
      tag_datapipeline: `Datenpipeline`,
      tag_validation: `Validierung`,
      tag_8formats: `8 Formate`,
      tag_simulation: `Simulation`,
      repo_full: `Repository ansehen`,
      repo_short: `Ansehen`,
      workflow_kicker: `Ablauf`,
      workflow_title: `Wie die Teile zusammenspielen`,
      workflow_intro: `Offene CIF-Quellen werden in reproduzierbare Referenzbibliotheken indiziert, von den Anwendungen genutzt und über die MCP-Ebene mit etablierten Verfeinerungs-Engines verbunden.`,
      workflow_caption: `Von offenen CIF-Quellen zur Phasenidentifikation und Ganz-Muster-Verfeinerung.`,
      note1_title: `Offene Daten rein`,
      note1_text: `COD-, PCOD- und TCOD-CIF-Archive speisen einen gemeinsamen, validierten Daten-Root und reproduzierbare Datenbank-Builds.`,
      note2_title: `Ein Bibliotheksformat`,
      note2_text: `.xinDB v3 ist das durchgehende spaltenbasierte Referenzformat der Anwendungen.`,
      note3_title: `Agentenfähig`,
      note3_text: `Vier MCP-Server stellen etablierte Verfeinerungs-Engines für KI-Agenten und automatisierte Workflows bereit.`,
      about_kicker: `Über uns`,
      about_title: `Im Offenen gebaut, auf offenen Daten`,
      about_p1: `XinProf entwickelt Pulver-Röntgenbeugungs-Software nach dem Clean-Room-Prinzip: Das Verhalten leitet sich aus offizieller Dokumentation, veröffentlichten Algorithmen und Black-Box-Beobachtung von Dateiformaten für die Interoperabilität ab.`,
      about_p2: `Referenzbibliotheken werden aus der Crystallography Open Database (CC0) und anderen offenen Quellen aufgebaut. Proprietäre Referenzdatenbanken werden niemals weitergegeben. Alle zehn Repositorys sind öffentlich und unter einer dualen Akademisch + Kommerziell-Lizenz verfügbar.`,
      about_p3: `Für kommerzielle Lizenzierung oder Zusammenarbeit erreichen Sie uns per <a class="mail-link" href="mailto:sshztx@outlook.com">E-Mail</a>.`,
      footer_text: `© 2026 XinProf · Erstellt mit reinem HTML, CSS und SVG.`,
      footer_repos: `Repositorys`,
      footer_releases: `Releases`,
      footer_license: `Lizenz`,
      footer_contact: `Kontakt`,
      img_hero_alt: `Pulver-Röntgenbeugungsdiagramm mit zwei Sätzen von Referenz-Peakpositionen`,
      img_workflow_alt: `Datenfluss von offenen CIF-Quellen über Datenbank-Builds bis zur Phasenidentifikation und Ganz-Muster-Verfeinerung, mit MCP-Integrationsebene`,
      img_lattice_alt: `Kristallgitter-Diagramm`
    },
    fr: {
      meta_title: `XinProf — Logiciel libre pour la diffraction des poudres XRD`,
      meta_desc: `XinProf développe des outils libres pour la diffraction des rayons X sur poudres : identification de phases, raffinement Rietveld sur le motif complet, bibliothèques de référence .xinDB et intégrations MCP pour les moteurs de raffinement établis.`,
      nav_projects: `Projets`,
      nav_workflow: `Fonctionnement`,
      nav_about: `À propos`,
      nav_github: `GitHub`,
      lang_label: `Choisir la langue`,
      hero_eyebrow: `Diffraction des poudres libre`,
      hero_title: `Du diagramme de diffraction à la **structure raffinée**.`,
      hero_lead: `XinProf développe des outils libres pour l'identification de phases, l'ajustement du motif complet, les bases de données de référence et l'intégration d'agents IA — fondés sur des algorithmes publiés et des données cristallographiques ouvertes.`,
      btn_explore: `Découvrir les projets`,
      btn_repos: `Tous les dépôts`,
      hero_caption: `Motif observé et positions des pics de référence pour deux phases candidates.`,
      stat_repos: `Dépôts publics`,
      stat_apps: `Applications de bureau`,
      stat_mcp: `Intégrations MCP`,
      stat_formats: `Formats de spectre pris en charge`,
      projects_kicker: `Projets`,
      projects_title: `Une chaîne d'outils libre complète`,
      projects_intro: `Dix dépôts publics couvrant tout le chemin des données de diffraction brutes jusqu'à la structure cristalline raffinée — avec les bibliothèques de référence et les intégrations d'agents qui relient le tout.`,
      group_core: `Applications principales`,
      group_data: `Données de référence`,
      group_utils: `Utilitaires`,
      group_mcp: `Intégrations MCP`,
      desc_xinmatch: `Plateforme libre d'analyse des phases par XRD sur poudres : recherche-appariement, identification séquentielle multiphase et quantification Rietveld, avec une GUI PySide6, une CLI et une API de bibliothèque Python.`,
      desc_xinrefinement: `Application de bureau pour l'ajustement du motif complet — raffinement structurel Rietveld, Le Bail et raffinement de profil, avec une GUI Qt6, une CLI et une API de bibliothèque Python.`,
      desc_database: `Scripts de construction, spécification de format et artefacts de publication pour les bibliothèques de phases de référence .xinDB v3 — COD / PCOD / TCOD et Materials Project.`,
      desc_synccod: `Racine de données sources COD / PCOD / TCOD partagée pour les deux constructions de base de données, avec outils d'acceptation et de synchronisation. Les données CIF elles-mêmes ne sont pas incluses.`,
      desc_converter: `Convertit entre les formats de spectre de diffraction des poudres : xy, txt, dat, csv, mdi, raw, xrdml et json.`,
      desc_synth: `Générateur de motifs XRD synthétiques simulant des diagrammes de diffraction pour étayer l'identification de phases et la validation d'algorithmes.`,
      desc_gsas: `Serveur MCP pour GSAS-II — raffinement Rietveld, analyse cristallographique et intégration de protocoles.`,
      desc_fullprof: `Serveur MCP pour FullProf — raffinement Rietveld et analyse de la diffraction des poudres.`,
      desc_profex: `Serveur MCP pour Profex/BGMN — analyse XRD, recherche-appariement, base de données COD et raffinement Rietveld.`,
      desc_maud: `Serveur MCP pour MAUD — analyse combinée de la diffraction, texture, contrainte et structure.`,
      tag_searchmatch: `Recherche-appariement`,
      tag_datapipeline: `Pipeline de données`,
      tag_validation: `Validation`,
      tag_8formats: `8 formats`,
      tag_simulation: `Simulation`,
      repo_full: `Voir le dépôt`,
      repo_short: `Voir`,
      workflow_kicker: `Fonctionnement`,
      workflow_title: `Comment les pièces s'assemblent`,
      workflow_intro: `Les sources CIF ouvertes sont indexées en bibliothèques de référence reproductibles, consommées par les applications et reliées aux moteurs de raffinement établis via la couche MCP.`,
      workflow_caption: `Des sources CIF ouvertes à l'identification de phases et au raffinement du motif complet.`,
      note1_title: `Données ouvertes en entrée`,
      note1_text: `Les archives CIF COD, PCOD et TCOD alimentent une racine de données partagée et validée ainsi que des constructions de base de données reproductibles.`,
      note2_title: `Un format de bibliothèque`,
      note2_text: `.xinDB v3 est le format de référence colonnaire unique utilisé par les applications.`,
      note3_title: `Prêt pour les agents`,
      note3_text: `Quatre serveurs MCP exposent les moteurs de raffinement établis aux agents IA et aux workflows automatisés.`,
      about_kicker: `À propos`,
      about_title: `Construit en toute transparence, sur des données ouvertes`,
      about_p1: `XinProf développe des logiciels de diffraction des rayons X sur poudres selon une approche de salle blanche : le comportement dérive de la documentation officielle, d'algorithmes publiés et de l'observation en boîte noire des formats de fichiers pour l'interopérabilité.`,
      about_p2: `Les bibliothèques de référence sont construites à partir de la Crystallography Open Database (CC0) et d'autres sources ouvertes. Les bases de données de référence propriétaires ne sont jamais redistribuées. Les dix dépôts sont publics et distribués sous une double licence Académique + Commerciale.`,
      about_p3: `Pour une licence commerciale ou une collaboration, contactez-nous par <a class="mail-link" href="mailto:sshztx@outlook.com">courriel</a>.`,
      footer_text: `© 2026 XinProf · Conçu avec du HTML, CSS et SVG purs.`,
      footer_repos: `Dépôts`,
      footer_releases: `Versions`,
      footer_license: `Licence`,
      footer_contact: `Contact`,
      img_hero_alt: `Diagramme de diffraction des rayons X sur poudres avec deux séries de positions de pics de référence`,
      img_workflow_alt: `Flux de données des sources CIF ouvertes via les constructions de base de données jusqu'à l'identification de phases et au raffinement du motif complet, avec couche d'intégration MCP`,
      img_lattice_alt: `Diagramme de réseau cristallin`
    },
    ar: {
      meta_title: `XinProf — برمجيات مفتوحة المصدر لـ XRD المسحوقي`,
      meta_desc: `يطوّر XinProf أدوات مفتوحة المصدر لحيود الأشعة السينية على المساحيق: تحديد الطور، ومطابقة أنماط Rietveld الكاملة، ومكتبات مرجعية .xinDB، وتكاملات MCP لمحركات المعايرة الراسخة.`,
      nav_projects: `المشاريع`,
      nav_workflow: `سير العمل`,
      nav_about: `حول`,
      nav_github: `GitHub`,
      lang_label: `اختر اللغة`,
      hero_eyebrow: `حيود المساحيق مفتوح المصدر`,
      hero_title: `من نمط الحيود إلى **البنية المُحسَّنة**.`,
      hero_lead: `يطوّر XinProf أدوات مفتوحة المصدر لتحديد الطور، ومطابقة الأنماط الكاملة، وقواعد البيانات المرجعية، وتكامل وكلاء الذكاء الاصطناعي — استنادًا إلى خوارزميات منشورة وبيانات بلورية مفتوحة.`,
      btn_explore: `استكشف المشاريع`,
      btn_repos: `كل المستودعات`,
      hero_caption: `النمط المرصود ومواضع قمم المرجع لطورين مرشحين.`,
      stat_repos: `مستودعات عامة`,
      stat_apps: `تطبيقات سطح المكتب`,
      stat_mcp: `تكاملات MCP`,
      stat_formats: `صيغ الطيف المدعومة`,
      projects_kicker: `المشاريع`,
      projects_title: `سلسلة أدوات مفتوحة كاملة`,
      projects_intro: `عشرة مستودعات عامة تغطي المسار الكامل من بيانات الحيود الخام إلى بنية بلورية مُحسَّنة — مع المكتبات المرجعية وتكاملات الوكلاء التي تربطها جميعًا.`,
      group_core: `التطبيقات الأساسية`,
      group_data: `البيانات المرجعية`,
      group_utils: `أدوات مساعدة`,
      group_mcp: `تكاملات MCP`,
      desc_xinmatch: `منصة مفتوحة المصدر لتحليل أطوار XRD المسحوقي: البحث والمطابقة، والتعريف التسلسلي متعدد الأطوار، والتكمية بطريقة Rietveld، مع واجهة PySide6 ورَدْسة سطر الأوامر وAPI لمكتبة Python.`,
      desc_xinrefinement: `تطبيق سطح مكتب لمطابقة الأنماط الكاملة — معايرة بنية Rietveld، وLe Bail، ومعايرة الملف الشخصي، مع واجهة Qt6 ورَدْسة سطر الأوامر وAPI لمكتبة Python.`,
      desc_database: `سكربتات البناء، ومواصفات الصيغة، وأصول الإصدار لمكتبات أطوار مرجعية .xinDB v3 — COD / PCOD / TCOD وMaterials Project.`,
      desc_synccod: `جذر بيانات مصدر مشترك COD / PCOD / TCOD لبناءي قاعدة البيانات، مع أدوات القبول والمزامنة. بيانات CIF نفسها غير مشمولة.`,
      desc_converter: `يحوّل بين صيغ طيف حيود المساحيق: xy وtxt وdat وcsv وmdi وraw وxrdml وjson.`,
      desc_synth: `مولّد أنماط XRD تركيبية يحاكي أنماط الحيود لدعم تحديد الطور والتحقق من الخوارزميات.`,
      desc_gsas: `خادم MCP لـ GSAS-II — معايرة Rietveld، والتحليل البلوري، وتكامل البروتوكولات.`,
      desc_fullprof: `خادم MCP لـ FullProf — معايرة Rietveld وتحليل حيود المساحيق.`,
      desc_profex: `خادم MCP لـ Profex/BGMN — تحليل XRD، والبحث والمطابقة، وقاعدة بيانات COD، ومعايرة Rietveld.`,
      desc_maud: `خادم MCP لـ MAUD — تحليل حيود متكامل، ونَسيج، وإجهاد، وبنية.`,
      tag_searchmatch: `بحث ومطابقة`,
      tag_datapipeline: `مسار بيانات`,
      tag_validation: `تحقق`,
      tag_8formats: `8 صيغ`,
      tag_simulation: `محاكاة`,
      repo_full: `عرض المستودع`,
      repo_short: `عرض`,
      workflow_kicker: `سير العمل`,
      workflow_title: `كيف تتكامل المكونات`,
      workflow_intro: `تُفهرس مصادر CIF المفتوحة في مكتبات مرجعية قابلة لإعادة الإنتاج، وتستهلكها التطبيقات، وتتصل بمحركات المعايرة الراسخة عبر طبقة MCP.`,
      workflow_caption: `من مصادر CIF المفتوحة إلى تحديد الطور ومطابقة الأنماط الكاملة.`,
      note1_title: `بيانات مفتوحة في المدخل`,
      note1_text: `تغذّي أرشيفات CIF الخاصة بـ COD وPCOD وTCOD جذر بيانات مشتركًا ومتحققًا منه، وعمليات بناء قواعد بيانات قابلة لإعادة الإنتاج.`,
      note2_title: `صيغة مكتبة واحدة`,
      note2_text: `.xinDB v3 هي صيغة المرجع العمودية الوحيدة المستخدمة عبر التطبيقات.`,
      note3_title: `جاهز للوكلاء`,
      note3_text: `يكشف أربعة خوادم MCP محركات المعايرة الراسخة لوكلاء الذكاء الاصطناعي ولتدفقات العمل الآلية.`,
      about_kicker: `حول`,
      about_title: `مبني في العلن، على بيانات مفتوحة`,
      about_p1: `يطوّر XinProf برمجيات حيود الأشعة السينية على المساحيق بنهج الغرفة النظيفة: يُشتق السلوك من الوثائق الرسمية، وخوارزميات منشورة، وملاحظة صيغ الملفات في الصندوق الأسود من أجل قابلية التشغيل البيني.`,
      about_p2: `تُبنى المكتبات المرجعية من قاعدة بيانات البلورات المفتوحة (CC0) ومصادر مفتوحة أخرى. لا تُعاد توزيع قواعد البيانات المرجعية الاحتكارية أبدًا. المستودعات العشرة كلها عامة وتُوزَّع تحت رخصة مزدوجة أكاديمية + تجارية.`,
      about_p3: `للترخيص التجاري أو التعاون، تواصلوا معنا عبر <a class="mail-link" href="mailto:sshztx@outlook.com">البريد الإلكتروني</a>.`,
      footer_text: `© 2026 XinProf · مبني بـ HTML وCSS وSVG صرفة.`,
      footer_repos: `المستودعات`,
      footer_releases: `الإصدارات`,
      footer_license: `الرخصة`,
      footer_contact: `اتصال`,
      img_hero_alt: `نمط حيود الأشعة السينية على المساحيق مع مجموعتين من مواضع قمم المرجع`,
      img_workflow_alt: `تدفق البيانات من مصادر CIF المفتوحة عبر بناء قواعد البيانات إلى تحديد الطور ومطابقة الأنماط الكاملة، مع طبقة تكامل MCP`,
      img_lattice_alt: `رسم تخطيطي لشبكة بلورية`
    }
  };

  var META_KEYS = ["meta_title", "meta_desc", "meta_og_title", "meta_og_desc"];
  var STORAGE_KEY = "xinprof-lang";

  function getLang() {
    var valid = { en: 1, zh: 1, ja: 1, de: 1, fr: 1, ar: 1 };
    var p = null, h = null;
    try {
      p = new URLSearchParams(location.search).get("lang");
      h = (location.hash || "").replace(/^#/, "");
    } catch (e) {}
    if (p && valid[p]) return p;
    if (h && valid[h]) return h;
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (saved && I18N[saved]) return saved;
    return "en";
  }

  function setMeta(id, value) {
    var el = document.getElementById(id);
    if (el && value != null) el.setAttribute("content", value);
  }

  function translateNode(el, t) {
    var key = el.getAttribute("data-i18n");
    var str = t[key];
    if (str == null) return;
    if (key === "hero_title") {
      str = str.replace(/\*\*(.+?)\*\*/g, '<span class="accent">$1</span>');
      el.innerHTML = str;
    } else if (str.indexOf("<") !== -1) {
      el.innerHTML = str;
    } else {
      el.textContent = str;
    }
  }

  function applyLang(lang) {
    var t = I18N[lang] || I18N.en;
    var root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";

    document.title = t.meta_title || document.title;
    setMeta("meta-desc", t.meta_desc);
    setMeta("meta-og-title", t.meta_title);
    setMeta("meta-og-desc", t.meta_desc);

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (el.querySelector("[data-i18n]")) {
        // has translatable descendants; translate them, keep surrounding template
        var children = el.querySelectorAll("[data-i18n]");
        for (var j = 0; j < children.length; j++) translateNode(children[j], t);
        continue;
      }
      translateNode(el, t);
    }

    var altNodes = document.querySelectorAll("[data-i18n-alt]");
    for (var k = 0; k < altNodes.length; k++) {
      var akey = altNodes[k].getAttribute("data-i18n-alt");
      if (akey in t) altNodes[k].setAttribute("alt", t[akey]);
    }

    var sel = document.getElementById("lang-select");
    if (sel) sel.value = lang;
  }

  function init() {
    var lang = getLang();
    applyLang(lang);
    var sel = document.getElementById("lang-select");
    if (sel) {
      sel.addEventListener("change", function () {
        var v = sel.value;
        applyLang(v);
        try { localStorage.setItem(STORAGE_KEY, v); } catch (e) {}
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
