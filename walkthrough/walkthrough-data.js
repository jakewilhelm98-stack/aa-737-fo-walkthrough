/**
 * AA 737 FO Interactive Walkthrough — Complete Flight Data
 * Gate-to-gate: every flow, checklist, callout, panel state, gotcha, and timing note.
 *
 * Built from:
 *   - build_timeline.py  (18 phases, detail_box content)
 *   - fo_flows.md         (detailed FO flow items)
 *   - callouts.md         (who / says / when tables)
 *
 * Image references omit the .png extension — the app appends it at render time.
 * Image paths are relative to ../img/ from the walkthrough directory.
 */

const FLIGHT_DATA = {
  // ───────────────────────────────────────────────────────────
  // META
  // ───────────────────────────────────────────────────────────
  meta: {
    title: "AA 737 FO Flight Walkthrough",
    subtitle: "Gate to Gate — Every Flow, Checklist & Callout in Sequence",
    totalPhases: 26,
    version: "1.0.0"
  },

  // ───────────────────────────────────────────────────────────
  // PHASES
  // ───────────────────────────────────────────────────────────
  phases: [

    // ========================================================
    // PHASE 1 — ELECTRICAL POWER-UP
    // ========================================================
    {
      id: "electrical_power_up",
      number: 1,
      title: "Electrical Power-Up",
      category: "ground",
      steps: [
        {
          id: "power_up_procedure",
          type: "flow",
          who: "CA/FO",
          title: "Electrical Power Up Procedure",
          trigger: "Arriving at cold & dark airplane — safely configures aircraft for application of electrical power and air conditioning",
          description: "The FIRST procedure accomplished on a cold/dark aircraft — ALWAYS before the Origination or General Preflight flow. The common-path items (1–6) are always done first to safely configure the airplane; step 1 physically flips the BAT switch ON and closes its guard (this is where the battery is actually turned on). Then branch on what power source is available: external power, APU (with ext pwr or battery start), or neither.",
          items: [
            { num: 1, name: "BAT switch", setting: "ON, guard closed (\"Guarded\")", critical: true, subitems: [
              { name: "Lift guard → flip BAT switch ON → close guard over it. This is the FIRST physical action on a cold/dark aircraft.", isNote: true },
              { name: "Energizes hot battery bus and standby bus, powering standby instruments and enabling APU start / ground power acceptance.", isNote: true },
              { name: "3RA-3VM: If external power is NOT used for APU start, wait ≥30 sec between closing the BAT switch guard and starting the APU (allows DPC self-test to complete).", isNote: true }
            ]},
            { num: 2, name: "STANDBY POWER switch", setting: "Guarded", critical: false, subitems: [] },
            { num: 3, name: "ALTERNATE FLAPS switch", setting: "Guarded", critical: false, subitems: [] },
            { num: 4, name: "L and R WIPER selectors", setting: "PARK", critical: false, subitems: [] },
            { num: 5, name: "ELEC1 and ELEC2 HYD PUMPS switches", setting: "OFF", critical: false, subitems: [] },
            { num: 6, name: "LANDING GEAR lever", setting: "DN", critical: false, subitems: [
              { name: "3 Green — Illuminated", isNote: true },
              { name: "3 Red — Extinguished", isNote: true }
            ]}
          ],
          images: [],
          panelState: [
            "BAT switch: ON, guard closed (hot battery bus + standby bus live)",
            "STANDBY POWER switch: Guarded",
            "ALTERNATE FLAPS switch: Guarded",
            "L/R WIPER selectors: PARK",
            "ELEC1/ELEC2 HYD PUMPS: OFF",
            "LANDING GEAR lever: DN, 3 Green illuminated, 3 Red extinguished"
          ],
          gotchas: [
            "This is the common-path setup — always done first regardless of power source",
            "Guards DOWN mean switches are protected in their normal position, not that the switch underneath is OFF",
            "30-second wait after BAT guard close applies ONLY if doing a battery/APU start without ext power (DPC self-test)",
            "If any red gear light stays on after DN selection, stop and troubleshoot before proceeding"
          ],
          timing: "~1 min for common-path items 1–6",
          aomRef: "AOM 3.2.1 Electrical Power Up Procedure (steps 1–6)",
          relatedFlashcards: ["Electrical", "Landing Gear"]
        },
        {
          id: "power_up_ext_power",
          type: "flow",
          who: "CA/FO",
          title: "Branch A — External Power Available",
          trigger: "GRD POWER AVAILABLE light illuminated",
          description: "Preferred configuration. Use ground power whenever available to reduce APU usage (AOM 3.2.2 priority).",
          items: [
            { num: 7, name: "GRD POWER AVAILABLE light", setting: "Illuminated", critical: false, subitems: [] },
            { num: "7a", name: "GRD PWR switch", setting: "ON", critical: true, subitems: [
              { name: "SOURCE OFF lights — Extinguished", isNote: true },
              { name: "TRANSFER BUS OFF lights — Extinguished", isNote: true },
              { name: "STANDBY PWR OFF light — Extinguished", isNote: true }
            ]},
            { num: "7b", name: "General Preflight Flow OR Origination Flow", setting: "Accomplish as applicable", critical: false, subitems: [] }
          ],
          images: [],
          panelState: [
            "GRD POWER AVAILABLE: illuminated blue",
            "GRD PWR switch: ON",
            "SOURCE OFF, TRANSFER BUS OFF, STANDBY PWR OFF lights: all extinguished",
            "Aircraft now powered from external ground power"
          ],
          gotchas: [
            "If SOURCE OFF stays lit, ground power is out of limits — call ramp",
            "If TRANSFER BUS OFF stays lit, a transfer relay did not close",
            "If STANDBY PWR OFF stays lit, verify STANDBY POWER switch position",
            "Origination flow only on first flight of the day or after unobserved maintenance; otherwise General Preflight"
          ],
          timing: "~30 sec to verify lights",
          aomRef: "AOM 3.2.1 Electrical Power Up — External Power branch",
          relatedFlashcards: ["Electrical"]
        },
        {
          id: "power_up_apu_no_extpwr",
          type: "flow",
          who: "CA/FO",
          title: "Branch B — External Power NOT Available (APU Start)",
          trigger: "No ground power available but APU electrics are available",
          description: "When external power is unavailable and APU power is needed. This path tests the fire loops BEFORE starting the APU, then brings the APU online and establishes bleed-air/conditioning.",
          items: [
            { num: 7, name: "ENG 1, ENG 2, and APU FIRE switches", setting: "IN", critical: true, subitems: [] },
            { num: 8, name: "Ground Personnel", setting: "Alert", critical: true, subitems: [
              { name: "Fire warning light flashes and horn sounds on APU ground control panel during test — ground crews may mistake it for a real APU fire", isNote: true }
            ]},
            { num: 9, name: "Overheat and Fire Protection Panel", setting: "Check", critical: true, subitems: [
              { name: "Procedure: 21g.1.1 Fire and Overheat System Test", isNote: true },
              { name: "If one loop inoperative: 21g.1.2 Fire and Overheat System Test w/ Inop Loop", isNote: true }
            ]},
            { num: 10, name: "APU", setting: "Start", critical: true, subitems: [
              { name: "See 21c.1.1 APU Start", isNote: true }
            ]},
            { num: 11, name: "Electrical Power / Air Conditioning", setting: "Establish", critical: true, subitems: [
              { name: "See 3.2.2 Establishing Electrical Power/Air Conditioning", isNote: true }
            ]},
            { num: 12, name: "3AA-3MX Wheel Well Fire Detection System", setting: "Test", critical: false, subitems: [
              { name: "Test switch: Hold to OVHT/FIRE", isNote: true },
              { name: "Fire Warning Bell — Sounds", isNote: true },
              { name: "Master FIRE WARN lights — Illuminated", isNote: true },
              { name: "MASTER CAUTION lights — Illuminated", isNote: true },
              { name: "OVHT/DET annunciator — On", isNote: true },
              { name: "Fire Warning BELL CUTOUT switch: Push", isNote: true },
              { name: "Master FIRE WARN lights — Extinguished", isNote: true },
              { name: "Fire Warning Bell — Cancels", isNote: true },
              { name: "WHEEL WELL Fire Warning light — Illuminated", isNote: true }
            ]}
          ],
          images: [],
          panelState: [
            "All three FIRE switches IN (pushed down)",
            "Ground crew notified before fire test",
            "APU running, GEN BUS OFF lights extinguished after switch to APU gens",
            "Packs and bleeds configured per 3.2.2"
          ],
          gotchas: [
            "ALWAYS alert ground personnel before the fire test — the APU ground panel horn will fire",
            "Remember the 30-sec DPC self-test wait from step 1 BEFORE starting the APU",
            "Wheel well fire test is only for 3AA-3MX airframes",
            "3RA-3VM battery-start procedure lives in the maintenance manual and requires mx personnel present"
          ],
          timing: "~3–5 min including APU start and stabilization",
          aomRef: "AOM 3.2.1 Electrical Power Up — APU branch (steps 7–12)",
          relatedFlashcards: ["Electrical", "APU", "Fire Protection"]
        },
        {
          id: "power_up_battery_start",
          type: "flow",
          who: "CA/FO",
          title: "Branch C — No Ext Power AND No APU Electrics",
          trigger: "Neither external power nor APU electrics available — battery start required",
          description: "Fallback when neither ground power nor APU electrics are available. Uses battery to start the APU with bleed or ground air assist. Airframe-specific procedure.",
          items: [
            { num: 1, name: "3AA-3PX airframes", setting: "Battery Start with APU Bleed or Ground Air", critical: true, subitems: [
              { name: "See 21f.1.3 3AA-3PX Battery Start (With APU Bleed or Ground Air Available)", isNote: true }
            ]},
            { num: 2, name: "3RA-3VM airframes", setting: "Maintenance Manual procedure", critical: true, subitems: [
              { name: "Battery Start procedure lives in the maintenance manual and REQUIRES maintenance personnel to be present", isNote: true }
            ]}
          ],
          images: [],
          panelState: [
            "Battery carrying entire ship load — minimize time",
            "APU start initiated from battery power"
          ],
          gotchas: [
            "Know your airframe — 3AA-3PX vs 3RA-3VM procedures differ",
            "3RA-3VM crews cannot self-perform battery start — call mx",
            "Battery-only loads drain the battery quickly; minimize time before APU is online",
            "Still owe the 30-second DPC self-test wait after closing the BAT switch guard"
          ],
          timing: "Variable — depends on airframe and mx availability",
          aomRef: "AOM 3.2.1 Electrical Power Up — Battery Start branches",
          relatedFlashcards: ["Electrical", "APU"]
        },
        {
          id: "fire_overheat_test",
          type: "flow",
          who: "CA/FO",
          title: "Fire and Overheat System Test (21g.1.1)",
          trigger: "Called for by step 9 of APU branch — test the fire/overheat system before flight",
          description: "Verifies both detection loops, the fault monitoring circuitry, fire warning annunciations, and the extinguisher squib continuity. Done as part of the APU-branch power-up sequence (and any origination/first-flight check).",
          items: [
            { num: 1, name: "OVHT DET switches", setting: "NORMAL", critical: false, subitems: [] },
            { num: 2, name: "TEST switch", setting: "Hold to FAULT/INOP", critical: true, subitems: [
              { name: "MASTER CAUTION lights — Illuminated", isNote: true },
              { name: "OVHT/DET annunciator — Illuminated", isNote: true },
              { name: "FAULT light — Illuminated (if not, fault monitoring system is INOP)", isNote: true },
              { name: "APU DET INOP light — Illuminated", isNote: true },
              { name: "CAUTION: Do NOT operate the APU if the APU DET INOP light fails to illuminate", isNote: true }
            ]},
            { num: 3, name: "TEST switch", setting: "Hold to OVHT/FIRE", critical: true, subitems: [
              { name: "Fire Warning Bell — Sounds", isNote: true },
              { name: "Master FIRE WARN lights — Illuminated", isNote: true },
              { name: "MASTER CAUTION lights — Illuminated", isNote: true },
              { name: "OVHT/DET annunciator — Illuminated", isNote: true }
            ]},
            { num: 4, name: "Master FIRE WARN light", setting: "Push", critical: true, subitems: [
              { name: "Master FIRE WARN lights — Extinguished", isNote: true },
              { name: "Fire Warning Bell — Cancels", isNote: true },
              { name: "ENG 1, APU, and ENG 2 FIRE switch lights — Illuminated", isNote: true },
              { name: "3MY-3VM: ENG 1 and ENG 2 Start Lever lights — Illuminated", isNote: true },
              { name: "ENG 1 and ENG 2 OVERHEAT lights — Illuminated", isNote: true },
              { name: "WHEEL WELL fire warning light — Illuminated", isNote: true },
              { name: "Note (3AA-3MX): Wheel well light may or may not illuminate on DC-only power; retest wheel well after AC power is established for accuracy", isNote: true }
            ]},
            { num: 5, name: "EXT TEST switch", setting: "Check", critical: true, subitems: [
              { name: "TEST switch: Position to 1 and hold — Extinguisher Test lights illuminate (3 green)", isNote: true },
              { name: "TEST switch: Release — Extinguisher Test lights extinguish", isNote: true },
              { name: "Repeat for test position 2", isNote: true }
            ]}
          ],
          images: [],
          panelState: [
            "OVHT DET switches: NORMAL",
            "FAULT light working (proves fault monitor)",
            "APU DET INOP light working (required before APU ops)",
            "Fire bell + Master FIRE WARN + OVHT/DET all annunciate on OVHT/FIRE test",
            "Both EXT TEST positions light all 3 green squib lights"
          ],
          gotchas: [
            "HARD RULE: Do not operate the APU if the APU DET INOP light does not illuminate during the FAULT/INOP test",
            "If the FAULT light doesn't illuminate, the fault monitoring system itself is INOP — you'll lose annunciation of a real loop failure",
            "3AA-3MX wheel well light is unreliable on DC-only power — plan to retest after ground/APU AC power is up",
            "Push the Master FIRE WARN light to reset — don't release the TEST switch early",
            "EXT TEST positions 1 and 2 test separate squib circuits — both must be checked"
          ],
          timing: "~1–2 min",
          aomRef: "AOM 21g.1.1 Fire and Overheat System Test",
          relatedFlashcards: ["Fire Protection", "APU"]
        },
        {
          id: "fire_overheat_inop_loop",
          type: "flow",
          who: "CA/FO",
          title: "Fire/Overheat Test — Inoperative Loop (21g.1.2)",
          trigger: "21g.1.1 test failed — need to isolate the bad loop",
          description: "Procedure used to determine which specific loop is inoperative so the good loop can be selected for flight. Run each loop independently (A, then B) and interpret the annunciations per airframe.",
          items: [
            { num: 1, name: "OVHT DET switches", setting: "A", critical: true, subitems: [] },
            { num: 2, name: "TEST switch", setting: "OVHT / FIRE", critical: true, subitems: [
              { name: "3AA-3MX: FAULT extg + both ENG OVHT lights + fire switches illum → Loop A GOOD", isNote: true },
              { name: "3AA-3MX: FAULT illum + any ENG OVHT / fire switch stays extg → fault in Loop A of that engine", isNote: true },
              { name: "3MY-3VM: FAULT extg + both ENG OVHT + start lever lights + fire switches illum → Loop A GOOD", isNote: true },
              { name: "3MY-3VM: FAULT illum + any ENG OVHT / start lever / fire switch stays extg → fault in Loop A of that engine", isNote: true }
            ]},
            { num: 3, name: "OVHT DET switches", setting: "B", critical: true, subitems: [] },
            { num: 4, name: "TEST switch", setting: "OVHT / FIRE", critical: true, subitems: [
              { name: "Same interpretation rules apply for Loop B per airframe variant", isNote: true }
            ]},
            { num: 5, name: "OVHT DET switches", setting: "As required", critical: true, subitems: [
              { name: "Select the GOOD loop for each engine", isNote: true },
              { name: "If both loops test good, set NORMAL", isNote: true }
            ]},
            { num: 6, name: "TEST switch", setting: "OVHT / FIRE", critical: true, subitems: [
              { name: "If the final test is successful, leave the fire panel in this configuration for flight", isNote: true }
            ]}
          ],
          images: [],
          panelState: [
            "OVHT DET switches set to selected good loop(s)",
            "Fire panel left in verified configuration for flight"
          ],
          gotchas: [
            "This test is per engine per loop — a fault may exist in only one engine on one loop",
            "Airframe matters: 3MY-3VM also watches start lever lights as an indication",
            "After isolating the bad loop, don't forget the final OVHT/FIRE confirmation test",
            "If both loops fail on the same engine, the fire/overheat detection for that engine is inoperative — consult MEL"
          ],
          timing: "~2–3 min if a loop is suspected inop",
          aomRef: "AOM 21g.1.2 Fire and Overheat System Test with an Inoperative Loop",
          relatedFlashcards: ["Fire Protection"]
        },
        {
          id: "power_up_establishing",
          type: "flow",
          who: "CA/FO",
          title: "Establishing Electrical Power / Air Conditioning — Priorities",
          trigger: "After power source selected — set priorities for power & conditioning",
          description: "With all variables considered (ground/aircraft equipment, inside/outside air temp, ground/departure time, etc.), use the following priorities when applying electrical power and air conditioning.",
          items: [
            { num: 1, name: "Electrical", setting: "External power when available (reduces APU usage)", critical: false, subitems: [] },
            { num: 2, name: "Air Conditioning", setting: "Preconditioned Air (PCA) when available", critical: false, subitems: [
              { name: "Use APU when PCA is inoperative and/or conditioned air is needed for pax comfort", isNote: true },
              { name: "Do NOT use air conditioning packs if preconditioned air is connected", isNote: true }
            ]}
          ],
          images: [],
          panelState: [
            "Ext power selected over APU when available",
            "PCA connected when available; packs OFF while PCA is in use"
          ],
          gotchas: [
            "Hard rule: packs OFF whenever PCA is connected — running packs against PCA damages pack valves and wastes fuel",
            "Use APU only when you actually need it (no ext pwr, or PCA inop and pax comfort required)",
            "Hot day, long turn, no PCA → APU is legit. Cool day, ext pwr on, short turn → no APU",
            "IRS alignment still needs ~10 min regardless of power source — start it as soon as power is on the transfer buses"
          ],
          timing: "Decision-level, ongoing through ground ops",
          aomRef: "AOM 3.2.2 Establishing Electrical Power/Air Conditioning",
          relatedFlashcards: ["Electrical", "Air Conditioning", "APU"]
        }
      ]
    },

    // ========================================================
    // PHASE 2 — ORIGINATION
    // ========================================================
    {
      id: "origination",
      number: 2,
      title: "Origination",
      category: "ground",
      steps: [
        {
          id: "origination_flow",
          type: "flow",
          who: "FO",
          title: "Origination Flow",
          trigger: "First crew flight of the day OR after unobserved maintenance",
          description: "A thorough flight-deck inspection performed only on the first flight of the day or after unobserved maintenance. Covers emergency equipment, circuit breakers, system warning tests (mach/stall), oil quantities, and flight-deck access — items that only need verification once per crew sequence.",
          items: [
            // --- Left Panel (aft to forward) ---
            { num: 1, name: "Emergency Equipment", setting: "Check", critical: false, subitems: [] },
            { num: 2, name: "Circuit Breakers", setting: "Check", critical: false, subitems: [
              { name: "P6/P18 panels and control stand", isNote: true }
            ]},
            { num: 3, name: "Quick Reference Cards (QRCs)", setting: "Check", critical: false, subitems: [
              { name: "2 in glareshield holder", isNote: true }
            ]},
            { num: 4, name: "Aft Overhead Annunciator Panel", setting: "Set", critical: false, subitems: [] },
            { num: 5, name: "SERVICE INTERPHONE switch", setting: "OFF", critical: false, subitems: [] },
            { num: 6, name: "ENGINE Panel", setting: "Set", critical: false, subitems: [] },
            { num: 7, name: "Oxygen Panel", setting: "Set", critical: false, subitems: [] },
            { num: 8, name: "Landing Gear Indicator lights", setting: "Illuminated (3 green)", critical: true, subitems: [], note: "--- Right Panel (every flight) ---" },
            // --- Right Panel (every flight) ---
            { num: 9, name: "BROADBAND SYSTEM switch", setting: "Guarded", critical: false, subitems: [] },
            { num: 10, name: "FLIGHT RECORDER Switch", setting: "Guarded", critical: false, subitems: [] },
            { num: 11, name: "MACH AIRSPEED WARNING test switches", setting: "Test", critical: true, subitems: [
              { name: "→ Full procedure: Phase 26 → Mach/Airspeed Warning Test (AOM 3f.1)", isNote: true }
            ]},
            { num: 12, name: "STALL WARNING TEST switches", setting: "Test", critical: true, subitems: [
              { name: "→ Full procedure: Phase 26 → Stall Warning Test (AOM 3f.1) — needs AC busses powered ≥4 min", isNote: true }
            ]},
            { num: 13, name: "Eng Oil / Hydraulic Fluid Quantities", setting: "Check", critical: false, subitems: [] },
            { num: 14, name: "Parking Brake", setting: "Set", critical: false, subitems: [] },
            { num: 15, name: "Manual Gear Extension Access Door", setting: "Closed", critical: false, subitems: [] },
            { num: 16, name: "Yellow Book", setting: "Onboard", critical: false, subitems: [] },
            { num: 17, name: "SERVICE INTERPHONE switch", setting: "OFF", critical: false, subitems: [] },
            { num: 18, name: "Flight Deck Access System", setting: "Check", critical: false, subitems: [
              { name: "→ Full procedure: Phase 26 → Flight Deck Access System Test", isNote: true }
            ]}
          ],
          images: [
            { file: "orig_trigger", label: "Origination flow trigger" },
            { file: "orig_diagram_1", label: "Origination flow diagram (left panel)" },
            { file: "orig_diagram_2", label: "Origination flow diagram (right panel)" },
            { file: "orig_expanded_1", label: "Origination expanded detail 1" },
            { file: "orig_expanded_2", label: "Origination expanded detail 2" },
            { file: "orig_expanded_3", label: "Origination expanded detail 3" },
            { file: "orig_expanded_4", label: "Origination expanded detail 4" },
            { file: "01_origination_flow_1", label: "Origination flow page 1" },
            { file: "01_origination_flow_2", label: "Origination flow page 2" }
          ],
          panelState: [],
          gotchas: [
            "MACH/STALL WARNING tests — hold both switches simultaneously for each test",
            "SERVICE INTERPHONE — check OFF on BOTH left and right panels",
            "Oil qty: check for minimum AND note qty for trend monitoring",
            "Skip this flow on subsequent legs (same crew, observed turns)"
          ],
          timing: "",
          aomRef: "AOM Ch3f: Origination Flow Diagram + Expanded Flow",
          relatedFlashcards: ["Emergency Equipment", "Engines", "Oxygen", "Landing Gear", "Flight Instruments", "Communications"]
        }
      ]
    },

    // ========================================================
    // PHASE 3 — FLIGHT PREPARATION
    // ========================================================
    {
      id: "flight_preparation",
      number: 3,
      title: "Flight Preparation",
      category: "ground",
      steps: [
        {
          id: "flight_prep_parallel",
          type: "info",
          who: "CA/FO",
          title: "Flight Preparation — Parallel Tasks",
          trigger: "After origination flow complete",
          description: "Both pilots work in parallel on flight-preparation tasks: obtaining ATIS, programming the FMS, verifying the route and performance data against the dispatch release, completing the departure brief, and coordinating with flight attendants. The FO also performs the exterior walkaround inspection.",
          items: [
            { text: "ATIS - Obtain", critical: false },
            { text: "CNC (Crew Notification Center)", critical: false },
            { text: "Prep A/P + Panels", critical: false },
            { text: "FMS Preflight", critical: false },
            { text: "Route / Legs / Perf verification", critical: true },
            { text: "Departure Brief Card", critical: true },
            { text: "FA Brief + Welcome Aboard PA", critical: false },
            { text: "Exterior Inspection (walkround)", critical: false }
          ],
          images: [],
          panelState: [],
          gotchas: [
            "FMS: verify route legs match dispatch release waypoints",
            "Cost Index entered per company policy",
            "Perf Init: ZFW, reserves, CRZ ALT, transition alt",
            "Verify TAKEOFF REF page: V-speeds, flap setting, thrust rating",
            "FMS crosscheck with dispatch release — BOTH pilots independently verify"
          ],
          timing: "FMS: verify route, enter perf data, crosscheck with dispatch release",
          aomRef: "",
          relatedFlashcards: ["Flight Management Systems", "Autoflight", "Communications", "Performance"]
        }
      ]
    },

    // ========================================================
    // PHASE 4 — GENERAL PREFLIGHT
    // ========================================================
    {
      id: "general_preflight",
      number: 4,
      title: "General Preflight",
      category: "ground",
      steps: [
        {
          id: "general_preflight_flow",
          type: "flow",
          who: "CA/FO",
          title: "General Preflight Flow",
          trigger: "Prior to every flight",
          description: "A systematic scan of the entire flight deck performed before every flight. Both pilots verify every switch position on the overhead panel, glareshield, MCP, forward panel, and pedestal to ensure the aircraft is properly configured. This is the most comprehensive pre-departure flow.",
          items: [
            // --- OVERHEAD PANEL (Left to Right) ---
            { num: 1, name: "Flt Control Panel", setting: "Check", critical: false, subitems: [
              { name: "All Guarded/Existing EXCEPT:", isNote: true },
              { name: "Flt Ctrl LO PRESSURE", setting: "ILLUM" },
              { name: "YAW DAMPER", setting: "ON" }
            ]},
            { num: 2, name: "NAV Panel", setting: "Set (Normal)", critical: false },
            { num: 3, name: "Displays Panel", setting: "Auto/Normal", critical: false },
            { num: 4, name: "Fuel Panel", setting: "OFF/EXTG", critical: false, subitems: [
              { name: "XFEED", setting: "CLOSED" }
            ]},
            { num: 5, name: "Electrical", setting: "SET", critical: false, subitems: [
              { name: "CAB/UTIL PWR", setting: "ON" },
              { name: "IFE/PASS", setting: "ON" },
              { name: "Drive Lights", setting: "Illum" },
              { name: "GEN OFF BUS", setting: "Illum" }
            ]},
            { num: 6, name: "FIRE TESTS", setting: "", critical: true, note: "If no Elec Pwr Up Previously — Full procedure: Phase 26 → Fire & Overheat System Test (AOM 21g.1.1)" },
            { num: 7, name: "APU", setting: "Start", critical: false },
            { num: 8, name: "LAV SMOKE", setting: "Ext", critical: false },
            { num: 9, name: "Equip Cooling/Exhaust", setting: "Norm", critical: false },
            { num: 10, name: "EMER EXIT", setting: "Guarded", critical: false },
            { num: 11, name: "Fasten Belts", setting: "OFF", critical: false },
            { num: 12, name: "Wipers", setting: "Park", critical: false },
            { num: 13, name: "Window Heat", setting: "ON", critical: false, subitems: [
              { name: "OVHT lights OFF in 5 seconds", isNote: true }
            ]},
            { num: 14, name: "A/B Probe HT", setting: "Illum/AUTO", critical: false, subitems: [
              { name: "→ Full procedure: Phase 26 → TAT / Probe Heat Verification (AOM 3f.2)", isNote: true }
            ]},
            { num: 15, name: "Anti-ice Wing", setting: "Illum/OFF", critical: false },
            { num: 16, name: "Eng Anti-ice", setting: "Ext Illum/OFF", critical: false },
            { num: 17, name: "Hyd Panel", setting: "SET", critical: false, subitems: [
              { name: "ENG 1/2 Pumps", setting: "ON" }
            ]},
            { num: 18, name: "Cockpit Voice", setting: "Test", critical: false, subitems: [
              { name: "→ Full procedure: Phase 26 → Cockpit Voice Recorder Test (AOM 21d.1.2) — airframe-specific", isNote: true }
            ]},
            { num: 19, name: "A/C Panel", setting: "SET", critical: false, subitems: [
              { name: "Trim Air", setting: "ON" },
              { name: "RAM AIR FULL OPEN LT", setting: "Illum" },
              { name: "L/R Recirc Switches", setting: "AUTO" }
            ], note: "APU Running: Bld ON + Packs / GND: Packs OFF" },
            // --- GLARESHIELD (Left to Right) ---
            { num: 20, name: "Cabin Press", setting: "SET", critical: false, subitems: [
              { name: "FLT ALT CRZ", setting: "Set" },
              { name: "LAND ALT", setting: "SET" },
              { name: "DIFF Press/FPM", setting: "0" }
            ]},
            { num: 21, name: "CA Lighting", setting: "SET", critical: false },
            { num: 22, name: "Ignition", setting: "L/R", critical: false, note: "Start Considerations (BOTH etc)" },
            { num: 23, name: "ENG START", setting: "AUTO", critical: false },
            { num: 24, name: "FO Lighting", setting: "SET", critical: false, subitems: [
              { name: "Logo", setting: "ON" },
              { name: "Position", setting: "STEADY" },
              { name: "Anti-Collision", setting: "OFF" }
            ]},
            { num: 25, name: "Compass", setting: "Check", critical: false },
            { num: 26, name: "EFIS (Mins)", setting: "Set", critical: false, subitems: [
              { name: "RST", setting: "Press" },
              { name: "Wx/Terr.", setting: "As Req" },
              { name: "WXR", setting: "OFF" }
            ]},
            // --- MCP ---
            { num: 27, name: "MCP", setting: "Set", critical: false, subitems: [
              { name: "RWY HDG", setting: "Set" },
              { name: "F/D Switches", setting: "Both ON" },
              { name: "A/T", setting: "ARM" },
              { name: "IAS/MACH", setting: "Set to V2" },
              { name: "HDG", setting: "RWY" },
              { name: "LNAV/VNAV", setting: "As Req" },
              { name: "ALT", setting: "Initn Set" },
              { name: "AUTOPILOT", setting: "Disengaged" },
              { name: "BAR UP ↑", isNote: true }
            ]},
            { num: 28, name: "FO EFIS", setting: "Same as CA", critical: false },
            { num: 29, name: "Displays", setting: "SET", critical: false },
            { num: 30, name: "CONFIG/CABIN ALT", setting: "Ext.", critical: false },
            { num: 31, name: "Disengage Test", setting: "Test", critical: false, note: "HOLD 1/2: Steady Amber/Red" },
            { num: 32, name: "Lights", setting: "Test", critical: false, subitems: [
              { name: "→ Full procedure: Phase 26 → Lights Test (Master LIGHTS TEST & DIM) — fire warning lights NOT included", isNote: true }
            ]},
            { num: 33, name: "Instruments", setting: "Check", critical: false },
            // --- FORWARD PANEL ---
            { num: 34, name: "ISPD", setting: "SET", critical: false },
            { num: 35, name: "LDG Gear", setting: "Down", critical: false },
            { num: 36, name: "ENG INST", setting: "Check", critical: false },
            { num: 37, name: "FO CABIN ALT/CONFIG", setting: "Check", critical: false },
            { num: 38, name: "FO DU PANEL", setting: "Set", critical: false },
            { num: 39, name: "FO Instruments", setting: "Check", critical: false },
            { num: 40, name: "Ground Prox", setting: "Check", critical: false, subitems: [
              { name: "Guarded/Ext", isNote: true },
              { name: "→ Full procedure: Phase 26 → EGPWS / Ground Prox System Test (AOM 21p.1.2) — needs IRS aligned", isNote: true }
            ]},
            { num: 41, name: "AUTOBRAKE/ANTI-SKID", setting: "Check", critical: false },
            // --- PEDESTAL ---
            { num: 42, name: "PEDESTAL", setting: "", critical: false, note: "Section — Center Pedestal" },
            { num: 43, name: "SPD BRK", setting: "Down", critical: false },
            { num: 44, name: "TRs", setting: "Down", critical: false },
            { num: 45, name: "TLs", setting: "Closed", critical: false },
            { num: 46, name: "Park Brake", setting: "Set", critical: false },
            { num: 47, name: "ENG Start", setting: "Cutoff", critical: false },
            { num: 48, name: "FIRE TESTS", setting: "", critical: true, note: "If not previously completed — Full procedure: Phase 26 → Fire & Overheat System Test (AOM 21g.1.1)" },
            { num: 49, name: "STAB TRIM CUTOUT", setting: "NORM", critical: false },
            { num: 50, name: "CARGO FIRE", setting: "TEST", critical: true, subitems: [
              { name: "Belts/lights → Ext → Green Test", isNote: true }
            ]},
            { num: 51, name: "Radios", setting: "Set", critical: false, note: "No HF during Fuel" },
            { num: 52, name: "Aileron/Rudder Trim", setting: "SET", critical: false, subitems: [
              { name: "HYD (chk) 1/2 ON: Check for movement", isNote: true },
              { name: "Set", setting: "0/0" },
              { name: "HYD Pumps", setting: "OFF" }
            ]},
            { num: 53, name: "XPDR", setting: "SET", critical: false },
            { num: 54, name: "TA/RA", setting: "SELECT", critical: false },
            { num: 55, name: "WX/RAD", setting: "TEST/OFF", critical: false, subitems: [
              { name: "AOM 21p.1.6 — Test", isNote: true },
              { name: "→ Full procedure: Phase 26 → Weather Radar & Predictive Windshear (PWS) Test", isNote: true }
            ]},
            { num: 56, name: "T/O Config Switch", setting: "Test", critical: false, subitems: [
              { name: "AOM 21p.1.7 — Test", isNote: true },
              { name: "→ Full procedure: Phase 26 → T/O CONFIG Preflight Test", isNote: true }
            ]},
            { num: 57, name: "Stab Trim", setting: "Guarded", critical: false }
          ],
          images: [
            { file: "gen_pf_trigger", label: "General preflight trigger" },
            { file: "gen_pf_diagram", label: "General preflight flow diagram" },
            { file: "gen_pf_exp_01", label: "General preflight expanded 1" },
            { file: "gen_pf_exp_02", label: "General preflight expanded 2" },
            { file: "gen_pf_exp_03", label: "General preflight expanded 3" },
            { file: "gen_pf_exp_04", label: "General preflight expanded 4" },
            { file: "gen_pf_exp_05", label: "General preflight expanded 5" },
            { file: "gen_pf_exp_06", label: "General preflight expanded 6" },
            { file: "gen_pf_exp_07", label: "General preflight expanded 7" },
            { file: "gen_pf_exp_08", label: "General preflight expanded 8" },
            { file: "gen_pf_exp_09", label: "General preflight expanded 9" },
            { file: "gen_pf_exp_10", label: "General preflight expanded 10" },
            { file: "gen_pf_exp_11", label: "General preflight expanded 11" },
            { file: "gen_pf_exp_12", label: "General preflight expanded 12" },
            { file: "gen_pf_exp_13", label: "General preflight expanded 13" },
            { file: "gen_pf_exp_14", label: "General preflight expanded 14" },
            { file: "gen_pf_exp_15", label: "General preflight expanded 15" },
            { file: "gen_pf_exp_16", label: "General preflight expanded 16" },
            { file: "gen_pf_exp_17", label: "General preflight expanded 17" },
            { file: "gen_pf_exp_18", label: "General preflight expanded 18" },
            { file: "02_general_preflight_flow", label: "General preflight flow page" }
          ],
          panelState: [
            "OVHD: All switches normal/guarded, no annunciators illuminated",
            "WINDOW HEAT - ON (all 4)",
            "PROBE HEAT - AUTO",
            "YAW DAMPER - ON",
            "STAB TRIM cutout switches - NORMAL",
            "TRANSPONDER - set (TA/RA after takeoff)",
            "MCP: FD switches ON, A/T ARM, HDG/ALT/SPD bugs set",
            "Glareshield: MASTER CAUTION lights reset, no warnings"
          ],
          gotchas: [],
          timing: "Both pilots scan entire flight deck systematically",
          aomRef: "AOM Ch3f: General Preflight — 18 pages of expanded flow detail",
          relatedFlashcards: [
            "Air Conditioning", "Electrical", "Hydraulics", "Flight Controls",
            "Flight Instruments", "Autoflight", "Pressurization", "Ice and Rain Protection",
            "Pneumatics", "Fire Protection", "Aircraft Lighting", "Weather Radar",
            "Navigation", "Communications", "GPWS", "ATC/TCAS", "Oxygen", "Fuel"
          ]
        },
        {
          id: "fo_preflight_flow",
          type: "flow",
          who: "FO",
          title: "FO Preflight Flow",
          trigger: "Prior to every flight",
          description: "The FO's personal seat-area setup. Adjust seat and rudder pedals for proper reach, fasten the harness, test the oxygen mask for flow and seal, stow visors and shades, and set up the EFB with the correct charts for departure, destination, and alternate.",
          items: [
            { num: 1, name: "Seat", setting: "Adjust", critical: false, subitems: [] },
            { num: 2, name: "Rudder Pedals", setting: "Adjust", critical: false, subitems: [] },
            { num: 3, name: "Seat Belt/Harness", setting: "Fasten", critical: false, subitems: [] },
            { num: 4, name: "O2 Mask", setting: "Check/test", critical: true, subitems: [] },
            { num: 5, name: "Sun Visors", setting: "Stow", critical: false, subitems: [] },
            { num: 6, name: "Roller Shades", setting: "Stow", critical: false, subitems: [] },
            { num: 7, name: "EFB", setting: "Set up", critical: false, subitems: [] }
          ],
          images: [
            { file: "fo_pf_diagram", label: "FO preflight flow diagram" },
            { file: "fo_pf_exp_1", label: "FO preflight expanded 1" },
            { file: "fo_pf_exp_2", label: "FO preflight expanded 2" }
          ],
          panelState: [],
          gotchas: [
            "O2 mask test: verify flow, mask seal, and microphone function",
            "EFB: confirm charts loaded for departure/destination/alternate",
            "Harness: shoulder harness required for takeoff and landing"
          ],
          timing: "",
          aomRef: "",
          relatedFlashcards: ["Oxygen", "Flight Instruments"]
        },
        {
          id: "ca_preflight_flow",
          type: "flow",
          who: "CA",
          title: "CA Preflight Flow",
          trigger: "Prior to every flight",
          description: "The Captain's personal seat-area setup, mirroring the FO's flow on the left side. Seat and rudder pedal adjustment, harness fastened, and oxygen mask tested for flow, seal, and microphone function.",
          items: [
            { num: 1, name: "Seat / Rudder Pedals", setting: "Adjust", critical: false, subitems: [] },
            { num: 2, name: "Seat Belt / Harness", setting: "Fasten", critical: false, subitems: [] },
            { num: 3, name: "O2 Mask", setting: "Check/test", critical: true, subitems: [] }
          ],
          images: [
            { file: "ca_pf_diagram", label: "CA preflight flow diagram" },
            { file: "ca_pf_exp_1", label: "CA preflight expanded 1" },
            { file: "ca_pf_exp_2", label: "CA preflight expanded 2" }
          ],
          panelState: [],
          gotchas: [
            "Verify CA has tested O2 mask (you cannot check this for them)",
            "Both pilots should have independent O2 supply confirmed"
          ],
          timing: "",
          aomRef: "",
          relatedFlashcards: ["Oxygen"]
        }
      ]
    },

    // ========================================================
    // PHASE 5 — BEFORE START
    // ========================================================
    {
      id: "before_start",
      number: 5,
      title: "Before Start",
      category: "ground",
      steps: [
        {
          id: "ca_before_start_flow",
          type: "flow",
          who: "CA",
          title: "CA Before Start Flow",
          trigger: "Fueling complete, ~10 min to push",
          description: "The Captain prepares the aircraft for engine start once fueling is complete. Fasten-belts sign goes ON for passengers, the APU is placed on the busses to power the aircraft independently of ground power, the fuel panel is configured, and flight forms and AML are reviewed for open maintenance items.",
          items: [
            { num: 1, name: "FASTEN BELTS", setting: "ON", critical: false, subitems: [] },
            { num: 2, name: "APU", setting: "ON Busses", critical: false, subitems: [] },
            { num: 3, name: "FUEL Panel", setting: "Set", critical: false, subitems: [] },
            { num: 4, name: "Flight Forms and AML", setting: "Check", critical: false, subitems: [] }
          ],
          images: [
            { file: "ca_bstart_diagram", label: "CA Before Start flow diagram" },
            { file: "ca_bstart_exp_1", label: "CA Before Start expanded 1" },
            { file: "ca_bstart_exp_2", label: "CA Before Start expanded 2" },
            { file: "03_ca_before_start_flow", label: "CA Before Start flow page" }
          ],
          panelState: [
            "FASTEN BELTS - ON",
            "APU GEN ON BUS (transfer bus powered)",
            "FUEL: Center pumps OFF until after both engines running",
            "FUEL: L and R FWD/AFT pumps ON (or LOW PRESSURE light logic)",
            "AML reviewed — both pilots verify no open items affecting dispatch"
          ],
          gotchas: [
            "Verify fuel quantity matches dispatch release (+/- tolerance)",
            "Confirm APU GEN OFF BUS light extinguished (APU powering busses)"
          ],
          timing: "",
          aomRef: "",
          relatedFlashcards: ["APU", "Fuel", "Electrical"]
        },
        {
          id: "fo_before_start_flow",
          type: "flow",
          who: "FO",
          title: "FO Before Start Flow",
          trigger: "Fueling complete, ~10 min to push",
          description: "The FO's before-start responsibility is to independently review the flight forms and Aircraft Maintenance Log (AML), verifying no open items affect dispatch. This cross-check ensures both pilots are aware of any deferred maintenance.",
          items: [
            { num: 1, name: "Flight Forms and AML", setting: "Check", critical: false, subitems: [] }
          ],
          images: [
            { file: "fo_bstart_trigger", label: "FO Before Start trigger" },
            { file: "fo_bstart_exp_1", label: "FO Before Start expanded" }
          ],
          panelState: [],
          gotchas: [],
          timing: "",
          aomRef: "",
          relatedFlashcards: []
        },
        {
          id: "before_start_checklist",
          type: "checklist",
          who: "CA/FO",
          title: "Before Start Checklist — To the Line",
          trigger: "After Before Start flows complete",
          description: "The formal challenge-and-response verification that critical before-start items are set. Run 'to the line' now; the below-the-line items are completed after the Before Pushback flows. Oxygen, flight instruments, fuel quantity, parking brake, and fasten belts are all confirmed aloud.",
          items: [],
          images: [
            { file: "bstart_cl_1", label: "Before Start checklist page 1" },
            { file: "bstart_cl_2", label: "Before Start checklist page 2" }
          ],
          panelState: [],
          gotchas: [],
          timing: "",
          aomRef: "",
          relatedFlashcards: [],
          checklistFormat: "toTheLine",
          initiator: "CA",
          initiatorSays: "Before Start Checklist",
          completionCall: "To the Line",
          completionWho: "FO",
          challengeResponse: [
            { challenge: "Oxygen / Interphone / Windows", response: "Checked / Set", who: "Both" },
            { challenge: "Flight Instruments", response: "Checked", who: "Both" },
            { challenge: "Fuel", response: "___ pounds, set", who: "FO" },
            { challenge: "Parking Brake", response: "Set", who: "CA" },
            { challenge: "Fasten Belts", response: "On", who: "CA" }
          ],
          callouts: [
            { who: "CA", says: "Before Start Checklist", when: "After Before Start flow complete" },
            { who: "FO", says: "To the Line", when: "After completing checklist items to the line" }
          ]
        }
      ]
    },

    // ========================================================
    // PHASE 6 — BEFORE PUSHBACK
    // ========================================================
    {
      id: "before_pushback",
      number: 6,
      title: "Before Pushback",
      category: "ground",
      steps: [
        {
          id: "fo_before_pushback_flow",
          type: "flow",
          who: "FO",
          title: "FO Before Pushback Flow",
          trigger: "All external doors closed, cabin ready, guideperson ready for pushback reports received",
          description: "Final cabin-security items before the aircraft moves. The FO secures the flight-deck door, turns probe heat ON to protect pitot/static/AOA probes, configures the hydraulic panel, verifies all doors and windows are closed, and turns on the anti-collision beacon to warn ground personnel.",
          items: [
            { num: 1, name: "Flightdeck Door", setting: "Closed & Secured", critical: false, subitems: [] },
            { num: 2, name: "PROBE HEAT switches", setting: "ON", critical: true, subitems: [] },
            { num: 3, name: "HYDRAULIC Panel", setting: "Set", critical: false, subitems: [] },
            { num: 4, name: "Doors/Windows", setting: "Closed / Locked", critical: false, subitems: [] },
            { num: 5, name: "ANTI-COLLISION light", setting: "ON", critical: false, subitems: [] }
          ],
          images: [
            { file: "fo_bpush_trigger", label: "FO Before Pushback trigger" },
            { file: "fo_bpush_diagram", label: "FO Before Pushback diagram" },
            { file: "fo_bpush_exp", label: "FO Before Pushback expanded" },
            { file: "04_fo_before_pushback_flow", label: "FO Before Pushback flow page" }
          ],
          panelState: [
            "Flightdeck door: CLOSED & SECURED (green light)",
            "ANTI-COLLISION: ON (beacon visible to ground crew)",
            "PROBE HEAT: ON",
            "WINDOW HEAT: ON (from General Preflight)",
            "HYD: All pumps configured, no LOW PRESSURE lights"
          ],
          gotchas: [
            "PROBE HEAT goes ON here (Before Pushback), not at engine start",
            "Protects pitot/static/AOA probes from ice during pushback/taxi",
            "On ground with engines off, probes can overheat — PROBE HEAT inhibited on ground",
            "HYD panel: all ELEC pumps ON, verify no LOW PRESSURE lights"
          ],
          timing: "",
          aomRef: "",
          relatedFlashcards: ["Hydraulics", "Ice and Rain Protection", "Aircraft Lighting"]
        },
        {
          id: "ca_before_pushback_flow",
          type: "flow",
          who: "CA",
          title: "CA Before Pushback Flow",
          trigger: "All external doors closed, cabin ready",
          description: "The Captain's before-pushback items mirror the FO's door and window checks from the left side. Verifying the flight-deck door is closed and secured and that all doors and windows are locked provides a redundant cross-check before the aircraft begins to move.",
          items: [
            { num: 1, name: "Flightdeck Door", setting: "Closed and Secured", critical: false, subitems: [] },
            { num: 2, name: "Doors/Windows", setting: "Closed / Locked", critical: false, subitems: [] }
          ],
          images: [
            { file: "ca_bpush_exp", label: "CA Before Pushback expanded" }
          ],
          panelState: [],
          gotchas: [],
          timing: "",
          aomRef: "",
          relatedFlashcards: []
        },
        {
          id: "before_pushback_checklist",
          type: "checklist",
          who: "CA/FO",
          title: "Before Start Checklist — Below the Line",
          trigger: "After Before Pushback flows complete",
          description: "Completing the below-the-line portion of the Before Start Checklist. These items — doors closed/locked and anti-collision light on — could only be verified after the Before Pushback flows, which is why the checklist is split into two parts.",
          items: [],
          images: [
            { file: "bstart_cl_1", label: "Before Start checklist page 1" },
            { file: "bstart_cl_2", label: "Before Start checklist page 2" }
          ],
          panelState: [],
          gotchas: [],
          timing: "",
          aomRef: "",
          relatedFlashcards: [],
          checklistFormat: "belowTheLine",
          initiator: "CA",
          initiatorSays: "Below the Line",
          completionCall: "Before Start Checklist Complete",
          completionWho: "FO",
          challengeResponse: [
            { challenge: "Doors", response: "Closed / Locked", who: "FO" },
            { challenge: "Anti-Collision Light", response: "On", who: "FO" }
          ],
          callouts: [
            { who: "CA", says: "Below the Line", when: "After Before Pushback flows complete" },
            { who: "FO", says: "Before Start Checklist Complete", when: "After completing items below the line" }
          ]
        }
      ]
    },

    // ========================================================
    // PHASE 7 — PUSHBACK / ENGINE START
    // ========================================================
    {
      id: "pushback_engine_start",
      number: 7,
      title: "Pushback / Engine Start",
      category: "ground",
      steps: [
        {
          id: "pushback_comm_sequence",
          type: "callout",
          who: "",
          title: "Pushback Communication Sequence",
          trigger: "When cleared to start engine(s)",
          description: "Coordinating with the guideperson and ramp crew to safely push back and start engines. AA has four engine-start scenarios (start during push, start after push, start at gate then push, or start at gate then taxi) — the CA determines which one applies based on ramp configuration and company guidance.",
          items: [
            { text: "Guideperson confirms ready for pushback", critical: false },
            { text: "CA releases parking brake", critical: false },
            { text: "CA calls for engine start", critical: false }
          ],
          images: [
            { file: "push_proc_1", label: "Pushback procedure 1" },
            { file: "push_proc_2", label: "Pushback procedure 2" },
            { file: "push_proc_3", label: "Pushback procedure 3" },
            { file: "push_proc_4", label: "Pushback procedure 4" },
            { file: "push_proc_5", label: "Pushback procedure 5" },
            { file: "push_proc_6", label: "Pushback procedure 6" },
            { file: "push_proc_7", label: "Pushback procedure 7" },
            { file: "push_proc_8", label: "Pushback procedure 8" },
            { file: "20_pushback_starting_during_1", label: "Starting during pushback 1" },
            { file: "20_pushback_starting_during_2", label: "Starting during pushback 2" },
            { file: "21_pushback_starting_after_1", label: "Starting after pushback 1" },
            { file: "21_pushback_starting_after_2", label: "Starting after pushback 2" },
            { file: "22_pushback_start_at_gate_push_1", label: "Start at gate then push 1" },
            { file: "22_pushback_start_at_gate_push_2", label: "Start at gate then push 2" },
            { file: "23_pushback_start_at_gate_taxi", label: "Start at gate then taxi" }
          ],
          panelState: [],
          gotchas: [
            "4 engine start scenarios — CA determines which based on ramp config and company guidance",
            "1. Single engine taxi-out: Start one engine at gate, second later",
            "2. Two engine start at gate: Both engines before push",
            "3. Pushback then start: Push first, start during/after push",
            "4. Single engine start + push: Start one, push, start second enroute"
          ],
          timing: "See AOM 4-3 thru 4-9 for all 4 starting scenarios",
          aomRef: "AOM Ch4: Engine Start Procedures",
          relatedFlashcards: ["Engines", "APU", "Electrical"],
          callouts: [
            { who: "Guideperson", says: "All secure below, FOD check complete, steering disengaged with bypass pin installed, standing by for brake release, ready to pushout", when: "When ready for pushback" },
            { who: "CA", says: "Brakes released, cleared to push", when: "After releasing parking brake" },
            { who: "CA", says: "Start engine(s) ___", when: "When cleared to start" }
          ]
        },
        {
          id: "ca_after_start_flow",
          type: "flow",
          who: "CA",
          title: "CA After Start Flow",
          trigger: "Engine(s) stabilized",
          description: "Once the engines have stabilized at idle, the Captain sets anti-ice as required by conditions and switches the generators ON, transferring electrical power from the APU to the engine-driven generators. This is a short but critical flow that establishes normal electrical sourcing.",
          items: [
            { num: 1, name: "ANTI-ICE switch(es)", setting: "As Required", critical: false },
            { num: 2, name: "GENERATOR(s)", setting: "ON", critical: false }
          ],
          images: [
            { file: "ca_astart_trigger", label: "CA After Start trigger" },
            { file: "ca_astart_diagram", label: "CA After Start diagram" },
            { file: "ca_astart_exp", label: "CA After Start expanded" },
            { file: "05_ca_after_start_flow", label: "CA After Start flow page" }
          ],
          panelState: [
            "Both engines running, stabilized (N2 idle, oil press normal)",
            "GEN 1 and GEN 2 ON (SOURCE OFF lights extinguished)",
            "Bleeds: both engine bleeds ON, packs in AUTO",
            "ANTI-ICE: set per conditions (eng anti-ice ON if icing)",
            "Flaps: set to CA-commanded takeoff setting, green light"
          ],
          gotchas: [
            "GEN switches ON transfers from APU power to engine generators"
          ],
          timing: "",
          aomRef: "",
          relatedFlashcards: ["Engines", "Electrical", "Ice and Rain Protection"]
        },
        {
          id: "fo_after_start_flow",
          type: "flow",
          who: "FO",
          title: "FO After Start Flow",
          trigger: "Engine(s) stabilized",
          description: "The FO verifies anti-ice settings, configures air conditioning packs and bleeds for taxi, performs a recall check to ensure no hidden annunciators, reviews secondary engine indications, shuts down the APU if no longer needed, and conducts a joint flight-control check with the CA (full deflection all axes).",
          items: [
            { num: 1, name: "ANTI-ICE switch(es)", setting: "Verify", critical: false },
            { num: 2, name: "Air Conditioning & Bleeds", setting: "Set", critical: false },
            { num: 3, name: "Recall Check", setting: "Complete", critical: false, subitems: [
              { name: "→ Full procedure: Phase 26 → Recall Check (Master Caution Recall) — AOM 21p.2.1", isNote: true }
            ]},
            { num: 4, name: "Secondary Engine Indications", setting: "Clear", critical: false },
            { num: 5, name: "APU", setting: "As Required", critical: false },
            { num: 6, name: "Flight Control Check", setting: "Joint (CA & FO)", critical: false }
          ],
          images: [
            { file: "fo_astart_trigger", label: "FO After Start trigger" },
            { file: "fo_astart_diagram", label: "FO After Start diagram" },
            { file: "fo_astart_exp", label: "FO After Start expanded" },
            { file: "06_fo_after_start_flow", label: "FO After Start flow page" }
          ],
          panelState: [],
          gotchas: [
            "Clear secondary engine indications AFTER 2nd engine stabilizes",
            "Recall Check: press RECALL — verify no hidden annunciators",
            "Flight Control Check: FULL deflection all axes, BOTH pilots verify",
            "If single-engine taxi: flight control check after 2nd engine start"
          ],
          timing: "FO will clear Secondary Engine Indications from displays after second engine stabilized.",
          aomRef: "",
          relatedFlashcards: ["Air Conditioning", "Pneumatics", "Ice and Rain Protection", "Flight Controls", "Flight Warning System"]
        },
        {
          id: "after_start_salute",
          type: "callout",
          who: "CA",
          title: "Salute Acknowledgment",
          trigger: "After receiving salute from guideperson and ground equipment is clear",
          description: "The guideperson salutes to indicate all ground equipment is clear and the tow bar is disconnected. The CA acknowledges the salute verbally, confirming the aircraft is free to taxi under its own power.",
          items: [],
          images: [],
          panelState: [],
          gotchas: [],
          timing: "",
          aomRef: "",
          relatedFlashcards: [],
          callouts: [
            { who: "CA", says: "I have a salute", when: "After receiving salute from guideperson and ground equipment is clear" }
          ]
        },
        {
          id: "after_start_checklist",
          type: "checklist",
          who: "CA/FO",
          title: "After Start Checklist",
          trigger: "After After Start flows complete",
          description: "A challenge-and-response checklist confirming all post-engine-start items are complete: generators on, anti-ice set, probe heat on, recall checked, flaps set with green light, and flight controls verified by both pilots. This gates the aircraft for taxi.",
          items: [],
          images: [
            { file: "astart_cl", label: "After Start checklist" }
          ],
          panelState: [],
          gotchas: [],
          timing: "",
          aomRef: "",
          relatedFlashcards: [],
          checklistFormat: "full",
          initiator: "CA",
          initiatorSays: "After Start Checklist",
          completionCall: "After Start Checklist Complete",
          completionWho: "FO",
          challengeResponse: [
            { challenge: "Generators", response: "On", who: "CA" },
            { challenge: "Anti-Ice", response: "As required / Set", who: "Both" },
            { challenge: "Probe Heat", response: "On", who: "FO" },
            { challenge: "Recall", response: "Checked", who: "FO" },
            { challenge: "Flaps", response: "___, green light", who: "FO" },
            { challenge: "Flight Controls", response: "Checked", who: "Both" }
          ],
          callouts: [
            { who: "CA", says: "After Start Checklist", when: "After After Start flows complete" },
            { who: "FO", says: "(Challenge & response items)", when: "Completing checklist items" },
            { who: "FO", says: "After Start Checklist Complete", when: "Upon completion" }
          ]
        }
      ]
    },

    // ========================================================
    // PHASE 8 — TAXI / BEFORE TAKEOFF
    // ========================================================
    {
      id: "taxi_before_takeoff",
      number: 8,
      title: "Taxi / Before Takeoff",
      category: "ground",
      steps: [
        {
          id: "taxi_callouts",
          type: "callout",
          who: "CA/FO",
          title: "Taxi Clearance Callouts",
          trigger: "Just prior to taxi",
          description: "Standard callouts as the aircraft begins to taxi. The CA commands the flap setting, the FO sets and verifies it, and both pilots confirm their respective sides are clear before moving. The Load Closeout typically arrives via ACARS during taxi and must be jointly reviewed.",
          items: [],
          images: [],
          panelState: [],
          gotchas: [],
          timing: "Load Closeout usually arrives via ACARS during taxi. FO holds closeout in view of both pilots for joint review. CA verifies via ACARS, CCI (WBZ* entry), or voice.",
          aomRef: "",
          relatedFlashcards: ["ACARS"],
          callouts: [
            { who: "CA", says: "Flaps ___", when: "Setting flaps for takeoff" },
            { who: "FO", says: "Flaps - Set", when: "After setting and verifying flaps" },
            { who: "CA", says: "Clear Left", when: "Just prior to taxi" },
            { who: "FO", says: "Clear Right", when: "Response to CA" }
          ]
        },
        {
          id: "ca_before_takeoff_flow",
          type: "flow",
          who: "CA",
          title: "CA Before Takeoff Flow",
          trigger: "After Load Closeout reviewed, both engines running, flaps set for takeoff",
          description: "The Captain verifies the aircraft is correctly configured for takeoff. Takeoff data and bugs are crosschecked, the HUD is set, generators confirmed ON, packs and bleeds in AUTO, flaps at the commanded setting with green light, and stabilizer trim set to match the calculated trim value.",
          items: [
            { num: 1, name: "Takeoff Data and Bugs", setting: "Check", critical: false },
            { num: 2, name: "HUD", setting: "Set", critical: false },
            { num: 3, name: "GEN1 and GEN2", setting: "ON", critical: false },
            { num: 4, name: "Air Conditioning & Bleeds", setting: "AUTO and Set", critical: false },
            { num: 5, name: "FLAPS", setting: "Set and Green light", critical: false },
            { num: 6, name: "STAB TRIM", setting: "Set", critical: false }
          ],
          images: [
            { file: "ca_btakeoff_trigger", label: "CA Before Takeoff trigger" },
            { file: "ca_btakeoff_diagram", label: "CA Before Takeoff diagram" },
            { file: "ca_btakeoff_exp_1", label: "CA Before Takeoff expanded 1" },
            { file: "ca_btakeoff_exp_2", label: "CA Before Takeoff expanded 2" },
            { file: "07_ca_before_takeoff_flow", label: "CA Before Takeoff flow page" }
          ],
          panelState: [
            "STAB TRIM: set and crosschecked, green band on wheel",
            "FLAPS: takeoff setting, green light ON",
            "AUTOBRAKE: RTO (armed for rejected takeoff)",
            "TRANSPONDER: TA/RA (or as assigned by ATC)",
            "All checklist tabs closed out on both EFBs"
          ],
          gotchas: [
            "STAB TRIM must match calculated trim from TPS/load sheet",
            "Both CA and FO independently verify stab trim — critical cross-check",
            "Flap green light = flaps agree with lever position",
            "Bugs: V1, VR, V2 set on both airspeed indicators and FMC"
          ],
          timing: "",
          aomRef: "",
          relatedFlashcards: ["Flight Controls", "HUD", "Autoflight", "Air Conditioning", "Pneumatics", "Performance"]
        },
        {
          id: "fo_before_takeoff_flow",
          type: "flow",
          who: "FO",
          title: "FO Before Takeoff Flow",
          trigger: "After Load Closeout reviewed, both engines running, flaps set for takeoff",
          description: "The FO independently verifies stab trim, flaps, takeoff data and bugs, and air conditioning/bleed settings. Pressing the T/O CONFIG switch (if installed) runs an automated check of flaps, trim, spoilers, and parking brake — a final configuration safety net before taking the runway.",
          items: [
            { num: 1, name: "STAB TRIM", setting: "Set", critical: false },
            { num: 2, name: "FLAPS", setting: "Set and Green Light", critical: false },
            { num: 3, name: "Takeoff Data and Bugs", setting: "Check", critical: false },
            { num: 4, name: "Air Conditioning & Bleeds", setting: "AUTO and Set", critical: false },
            { num: 5, name: "T/O CONFIG switch", setting: "Press (if installed)", critical: false, subitems: [
              { name: "→ Full procedure: Phase 26 → T/O CONFIG Preflight Test (AOM 21p.1.7)", isNote: true }
            ]}
          ],
          images: [
            { file: "fo_btakeoff_trigger", label: "FO Before Takeoff trigger" },
            { file: "fo_btakeoff_diagram", label: "FO Before Takeoff diagram" },
            { file: "fo_btakeoff_exp_1", label: "FO Before Takeoff expanded 1" },
            { file: "fo_btakeoff_exp_2", label: "FO Before Takeoff expanded 2" },
            { file: "fo_btakeoff_exp_3", label: "FO Before Takeoff expanded 3" },
            { file: "fo_btakeoff_exp_4", label: "FO Before Takeoff expanded 4" },
            { file: "08_fo_before_takeoff_flow", label: "FO Before Takeoff flow page" }
          ],
          panelState: [],
          gotchas: [
            "T/O CONFIG test: verifies flaps, trim, spoilers, parking brake config"
          ],
          timing: "",
          aomRef: "",
          relatedFlashcards: ["Flight Controls", "Performance", "Air Conditioning", "Pneumatics"]
        },
        {
          id: "before_takeoff_checklist",
          type: "checklist",
          who: "CA/FO",
          title: "Before Takeoff Checklist",
          trigger: "After Before Takeoff flows complete",
          description: "The final challenge-and-response checklist before takeoff. Both pilots verbally confirm stab trim units and green band, flaps and green light, V-speeds (V1, VR, V2), and cabin readiness. This is the last formal verification gate before approaching the runway.",
          items: [],
          images: [
            { file: "btakeoff_cl_1", label: "Before Takeoff checklist page 1" },
            { file: "btakeoff_cl_2", label: "Before Takeoff checklist page 2" },
            { file: "btakeoff_cl_3", label: "Before Takeoff checklist page 3" }
          ],
          panelState: [],
          gotchas: [
            "Both pilots visually verify all checklist tabs are closed out"
          ],
          timing: "",
          aomRef: "",
          relatedFlashcards: [],
          checklistFormat: "belowTheLine",
          initiator: "CA",
          initiatorSays: "Below The Line",
          completionCall: "Before Takeoff Checklist Complete",
          completionWho: "FO",
          challengeResponse: [
            { challenge: "Stab Trim", response: "___ units, ___ green band", who: "Both" },
            { challenge: "Flaps", response: "___, green light", who: "Both" },
            { challenge: "Takeoff Speeds / Bugs", response: "V1 ___, VR ___, V2 ___, checked", who: "Both" },
            { challenge: "Cabin", response: "Advised / Ready", who: "FO" }
          ],
          callouts: [
            { who: "CA", says: "Below The Line", when: "After Before Takeoff flows complete" },
            { who: "FO", says: "Before Takeoff Checklist Complete", when: "Upon completion" }
          ]
        }
      ]
    },

    // ========================================================
    // PHASE 9 — APPROACHING THE RUNWAY
    // ========================================================
    {
      id: "approaching_runway",
      number: 9,
      title: "Approaching the Runway",
      category: "takeoff",
      steps: [
        {
          id: "approaching_number_one",
          type: "flow",
          who: "CA/FO",
          title: "Approaching #1 for Takeoff",
          trigger: "Approaching #1 for takeoff",
          description: "Final items as the aircraft approaches the runway. The HUD is verified deployed, MCP and ND are crosschecked against the departure clearance, exterior lights are set for takeoff visibility, and current fuel is compared against the dispatch minimum takeoff fuel to ensure adequate reserves.",
          items: [
            { num: 1, name: "HUD", setting: "Verify Deployed", critical: false },
            { num: 2, name: "MCP/ND", setting: "Check", critical: false },
            { num: 3, name: "Exterior Lights", setting: "Set", critical: false },
            { num: 4, name: "Minimum takeoff fuel", setting: "Verify", critical: false }
          ],
          images: [],
          panelState: [],
          gotchas: [
            "MCP: Verify HDG, ALT, SPD bugs match departure clearance",
            "ND: Correct departure procedure displayed, range set",
            "HUD: Both deployed (CA + FO if dual-HUD equipped)",
            "Min fuel: compare current fuel to dispatch min takeoff fuel"
          ],
          timing: "",
          aomRef: "",
          relatedFlashcards: ["HUD", "Autoflight", "Flight Instruments", "Fuel"]
        },
        {
          id: "fa_prepare_callout",
          type: "callout",
          who: "FO",
          title: "Flight Attendant Notification PA",
          trigger: "No less than 2 minutes prior to takeoff",
          description: "A required PA announcement giving flight attendants at least two minutes notice before takeoff. This ensures the cabin crew is seated with harnesses fastened and the cabin is secured for departure.",
          items: [],
          images: [],
          panelState: [],
          gotchas: [],
          timing: "No less than 2 min prior to takeoff",
          aomRef: "",
          relatedFlashcards: [],
          callouts: [
            { who: "FO", says: "Flight Attendants Prepare For Takeoff", when: "No less than 2 min prior to takeoff (PA announcement)" }
          ]
        },
        {
          id: "lineup_taking_position",
          type: "flow",
          who: "CA/FO",
          title: "Line-Up / Taking Position",
          trigger: "When cleared onto the takeoff runway",
          description: "The last flow before takeoff roll. The chime-only switch is cycled to alert flight attendants, all exterior lights are set to maximum visibility (runway turnoff, landing, wing, and strobe), and the CA verbalizes the runway number from markings or signage as a deliberate wrong-runway prevention step.",
          items: [
            { num: 1, name: "CHIME ONLY switch", setting: "Cycle", critical: false },
            { num: 2, name: "Runway Turnoff Lights", setting: "ON", critical: false },
            { num: 3, name: "Landing Lights", setting: "ON", critical: false },
            { num: 4, name: "Wing Lights", setting: "On", critical: false, note: "--- First Officer ---" },
            { num: 5, name: "Position Lights", setting: "STROBE AND STEADY", critical: false },
            { num: 6, name: "(Ready for takeoff)", setting: "", critical: false }
          ],
          images: [],
          panelState: [
            "Runway Turnoff Lights: ON",
            "Wing Lights: ON",
            "Position Lights: STROBE AND STEADY",
            "Landing Lights: ON (after takeoff clearance)"
          ],
          gotchas: [
            "CA verbalizes runway number from markings/signage — not memory",
            "This is a deliberate runway verification step to prevent wrong-runway takeoff",
            "CHIME ONLY cycle: alerts FAs that takeoff is imminent"
          ],
          timing: "",
          aomRef: "",
          relatedFlashcards: ["Aircraft Lighting"],
          callouts: [
            { who: "CA", says: "<Runway Number>, Clear Left", when: "When cleared onto takeoff runway, verbalizing runway by markings/signage" },
            { who: "FO", says: "Clear Right", when: "Response to CA" }
          ]
        }
      ]
    },

    // ========================================================
    // PHASE 10 — TAKEOFF
    // ========================================================
    {
      id: "takeoff",
      number: 10,
      title: "Takeoff",
      category: "takeoff",
      steps: [
        {
          id: "normal_takeoff_roll",
          type: "callout",
          who: "PF/PM",
          title: "Normal Takeoff Roll — Actions & Callouts",
          trigger: "When cleared for takeoff",
          description: "The takeoff sequence from thrust application through liftoff. PF advances thrust and flies the aircraft while PM monitors engine parameters, guards the controls, and makes standardized speed callouts at 80 knots, V1, and rotate.",
          items: [
            { text: "PF: Advance thrust levers, verify both engines stabilize at ~40% N1", critical: false },
            { text: "PF: Press TO/GA switch", critical: false },
            { text: "PM: Guard the flight controls; verify symmetric acceleration and target N1", critical: false },
            { text: "PM: Thrust set callout with target N1", critical: true },
            { text: "PM: 80 knot callout", critical: true },
            { text: "PF: Cross-check airspeed — captain ensures all indications agree", critical: true },
            { text: "PM: V1 callout (if required)", critical: true },
            { text: "PM: Rotate callout at VR", critical: true },
            { text: "PM: Positive rate verified on altimeter", critical: true },
            { text: "PF: Gear Up", critical: true }
          ],
          images: [
            { file: "takeoff_ac_1", label: "Takeoff actions & callouts 1" },
            { file: "takeoff_ac_2", label: "Takeoff actions & callouts 2" },
            { file: "takeoff_ac_3", label: "Takeoff actions & callouts 3" },
            { file: "takeoff_ac_4", label: "Takeoff actions & callouts 4" },
            { file: "takeoff_ac_5", label: "Takeoff actions & callouts 5" },
            { file: "takeoff_ac_6", label: "Takeoff actions & callouts 6" },
            { file: "takeoff_ac_7", label: "Takeoff actions & callouts 7" },
            { file: "takeoff_ac_8", label: "Takeoff actions & callouts 8" },
            { file: "takeoff_ac_9", label: "Takeoff actions & callouts 9" },
            { file: "30_takeoff_actions_callouts_1", label: "Takeoff callouts reference 1" },
            { file: "30_takeoff_actions_callouts_2", label: "Takeoff callouts reference 2" },
            { file: "30_takeoff_actions_callouts_3", label: "Takeoff callouts reference 3" },
            { file: "30_takeoff_actions_callouts_4", label: "Takeoff callouts reference 4" }
          ],
          panelState: [],
          gotchas: [],
          timing: "",
          aomRef: "AOM Ch6: Normal Takeoff, Noise Abatement, Rejected Takeoff",
          relatedFlashcards: ["Engines", "Autoflight", "Flight Instruments", "Landing Gear", "Performance"],
          callouts: [
            { who: "PF", says: "TOGA.", when: "Pressing TO/GA switch to set takeoff thrust" },
            { who: "PM", says: "Thrust set __.", when: "After verifying target N1 obtained (e.g. 'Thrust set 91.3.')" },
            { who: "PM", says: "80.", when: "Passing 80 knots" },
            { who: "PF", says: "Checked.", when: "Response to 80 — captain ensures all airspeed indications agree" },
            { who: "PM", says: "V1.", when: "Reaching V1 speed (if required)" },
            { who: "PM", says: "Rotate.", when: "At VR" },
            { who: "PM", says: "Positive rate.", when: "After verifying positive rate of climb on altimeter" },
            { who: "PF", says: "Gear up.", when: "After verifying positive rate of climb on altimeter" }
          ],
          calloutSequence: [
            // ── Commencing Takeoff Roll ──
            { type: "milestone", text: "Commencing Takeoff Roll" },
            { who: "PF", type: "action", text: "Advance thrust levers, verify both engines stabilize at ~40% N1" },
            { who: "PF", type: "action", text: "Press TO/GA switch" },
            { who: "PF", type: "callout", text: "TOGA." },
            { who: "PM", type: "action", text: "Guard the flight controls" },
            { who: "PM", type: "action", text: "Verify symmetric acceleration and target N1" },
            { who: "PM", type: "callout", text: "Thrust set __." },
            // ── 80 Knots ──
            { type: "milestone", text: "80 Knots" },
            { who: "PM", type: "callout", text: "80." },
            { who: "PF", type: "callout", text: "Checked." },
            { who: "PM", type: "action", text: "Verify A/T annunciation changes to THR HLD by 90 knots" },
            { who: "PF", type: "action", text: "Captain ensures all airspeed indications agree" },
            // ── V1 ──
            { type: "milestone", text: "V1" },
            { who: "PM", type: "callout", text: "V1." },
            { who: "PF", type: "action", text: "Captain removes hand from thrust levers" },
            // ── VR ──
            { type: "milestone", text: "VR" },
            { who: "PM", type: "callout", text: "Rotate." },
            { who: "PF", type: "action", text: "Rotate at 2-3 deg/sec" },
            // ── After Liftoff ──
            { type: "milestone", text: "After Liftoff" },
            { who: "PM", type: "action", text: "Verify positive rate of climb on altimeter" },
            { who: "PM", type: "callout", text: "Positive rate." },
            { who: "PF", type: "action", text: "Verify positive rate of climb on altimeter" },
            { who: "PF", type: "callout", text: "Gear up." },
            { who: "PM", type: "action", text: "Position landing gear lever UP" }
          ]
        },
        {
          id: "flap_retraction_sequence",
          type: "callout",
          who: "PF/PM",
          title: "Flap Retraction & Initial Climb Callouts",
          trigger: "Above 400 ft RA — at acceleration height",
          description: "After liftoff, the crew systematically retracts flaps during the initial climb. PF accelerates and calls for each flap setting while PM verifies speed is at or above the retraction speed before selecting flaps. Proper speed verification prevents aerodynamic stall during configuration changes.",
          items: [
            { text: "PF: Above 400 ft RA — verify/call for appropriate roll mode", critical: false },
            { text: "PF: At ACCEL HT — verify, select, or request VNAV (or LVL CHG, set speed)", critical: false },
            { text: "PF: Reduce pitch and accelerate", critical: false },
            { text: "PF: Check airspeed — retract flaps per Flap Retraction Schedule", critical: true },
            { text: "PM: Check airspeed, select proper flap setting, monitor retraction", critical: true },
            { text: "PM: Accomplish PM After Takeoff Flow and After Takeoff Checklist", critical: false }
          ],
          images: [],
          panelState: [],
          gotchas: [
            "Below 400 ft RA: F/D roll commands hold current ground track",
            "Above 400 ft RA: LNAV will engage if armed",
            "If terrain is a factor: maintain UP bug speed until clear of all obstacles"
          ],
          timing: "",
          aomRef: "AOM Ch6: Normal Takeoff Through Flap Retraction",
          relatedFlashcards: ["Autoflight", "Flight Controls", "Performance"],
          callouts: [
            { who: "PF", says: "Flaps ___.", when: "Check airspeed — retract flaps per Flap Retraction Schedule" },
            { who: "PM", says: "Speed verified.", when: "After verifying airspeed for flap setting" },
            { who: "PF", says: "Flaps up, after takeoff checklist.", when: "Final flap retraction — requesting clean config and checklist" }
          ]
        },
        {
          id: "rejected_takeoff",
          type: "info",
          who: "PF/PM",
          title: "Rejected Takeoff (RTO)",
          trigger: "Decision to reject takeoff (below V1)",
          description: "RTO decision and execution procedures. Below V1, the captain has sole authority to reject the takeoff. At or above V1, the crew is committed to fly. If rejected, PF applies idle thrust, maximum reverse, and maximum braking while PM monitors speedbrake deployment and deceleration.",
          items: [
            { text: "Below V1: CA has sole authority to reject", critical: true },
            { text: "At/above V1: GO unless the airplane cannot fly", critical: true },
            { text: "RTO: Thrust levers IDLE, reverse thrust, MAX braking", critical: true },
            { text: "PM calls: 'Deployed.' (speedbrakes) — monitors deceleration", critical: false },
            { text: "After stop: PM runs Rejected Takeoff checklist", critical: false }
          ],
          images: [
            { file: "rto_1", label: "Rejected takeoff procedure 1" },
            { file: "rto_2", label: "Rejected takeoff procedure 2" },
            { file: "31_rejected_takeoff", label: "Rejected takeoff reference" }
          ],
          panelState: [],
          gotchas: [
            "Below V1: CA has sole authority to reject",
            "At/above V1: GO unless the airplane cannot fly",
            "RTO: Thrust levers IDLE, reverse thrust, MAX braking",
            "PM calls: 'Deployed.' (speedbrakes) — monitors deceleration",
            "After stop: PM runs Rejected Takeoff checklist"
          ],
          timing: "",
          aomRef: "AOM Ch6: Rejected Takeoff",
          relatedFlashcards: ["Engines", "Landing Gear", "Flight Controls", "Performance"]
        }
      ]
    },

    // ========================================================
    // PHASE 11 — AFTER TAKEOFF / CLIMB
    // ========================================================
    {
      id: "after_takeoff_climb",
      number: 11,
      title: "After Takeoff / Climb",
      category: "flight",
      steps: [
        {
          id: "pm_after_takeoff_flow",
          type: "flow",
          who: "PM",
          title: "PM After Takeoff Flow",
          trigger: "After flap and slat retraction complete",
          description: "PM cleans up the aircraft after flap/slat retraction is complete. Verifies flaps up with no lights, sets gear lever off, disarms autobrake, checks pressurization and bleeds, and manages anti-ice and APU. This is a silent flow — PM completes it independently.",
          items: [
            { num: 1, name: "FLAPS", setting: "UP / No Lights", critical: false },
            { num: 2, name: "Gear", setting: "OFF (or UP per fleet)", critical: false },
            { num: 3, name: "AUTO BRAKE", setting: "OFF", critical: false },
            { num: 4, name: "Air Conditioning, Bleeds, Pressurization", setting: "Check", critical: false },
            { num: 5, name: "ANTI-ICE", setting: "As Required", critical: false },
            { num: 6, name: "APU", setting: "As Required", critical: false }
          ],
          images: [
            { file: "pm_atakeoff_trigger", label: "PM After Takeoff trigger" },
            { file: "pm_atakeoff_diagram", label: "PM After Takeoff diagram" },
            { file: "pm_atakeoff_exp", label: "PM After Takeoff expanded" },
            { file: "09_pm_after_takeoff_flow", label: "PM After Takeoff flow page" }
          ],
          panelState: [
            "FLAPS: UP, no flap lights",
            "Gear: OFF (NG) or UP (MAX)",
            "AUTO BRAKE: OFF",
            "Air Conditioning and Pressurization: checked and normal",
            "APU: as required (typically OFF after engine generators on)"
          ],
          gotchas: [
            "NG: Gear lever to OFF (removes hyd pressure from gear actuators)",
            "MAX: Gear lever to UP (PSEU handles pressure removal automatically)",
            "After Takeoff is a SILENT checklist — PM completes alone"
          ],
          timing: "",
          aomRef: "",
          relatedFlashcards: ["Landing Gear", "Air Conditioning", "Pneumatics", "Pressurization", "Ice and Rain Protection", "APU"]
        },
        {
          id: "after_takeoff_checklist",
          type: "checklist",
          who: "PM",
          title: "After Takeoff Checklist",
          trigger: "PM completes silently after After Takeoff flow",
          description: "A silent checklist completed by PM alone after the After Takeoff flow. PM verifies all flow items are correct and announces completion. No challenge-response is required.",
          items: [],
          images: [
            { file: "atakeoff_cl", label: "After Takeoff checklist" }
          ],
          panelState: [],
          gotchas: [],
          timing: "",
          aomRef: "",
          relatedFlashcards: [],
          checklistFormat: "silent",
          initiator: "PM",
          initiatorSays: "",
          completionCall: "After Takeoff Checklist Complete",
          completionWho: "PM",
          challengeResponse: [],
          callouts: [
            { who: "PM", says: "After Takeoff Checklist Complete", when: "Upon silent completion of After Takeoff checklist" }
          ]
        },
        {
          id: "climbing_10k",
          type: "callout",
          who: "PF/PM",
          title: "Climbing Through 10,000 ft AFL",
          trigger: "Climbing through 10,000 ft AFL",
          description: "Passing 10,000 ft ends the sterile cockpit period. PF chimes to signal the crew and flight attendants, and PM verifies CPDLC is logged on to the appropriate ATC facility.",
          items: [
            { text: "PF: Sterile Flightdeck - Chime", critical: false },
            { text: "PM: CPDLC Log-On - Verify", critical: false }
          ],
          images: [
            { file: "climb_10k", label: "Climbing through 10,000 ft" }
          ],
          panelState: [],
          gotchas: [
            "Below 10,000 ft AFL: no non-essential conversation or tasks",
            "Chime signals crew and FAs that sterile cockpit is active/ended",
            "CPDLC: verify logged on to appropriate ATC facility"
          ],
          timing: "",
          aomRef: "",
          relatedFlashcards: ["Communications", "ATC/TCAS"],
          callouts: [
            { who: "PF", says: "(Chime)", when: "Climbing through 10,000 ft AFL — Sterile Flightdeck" },
            { who: "PM", says: "CPDLC Log-On verified", when: "After 10,000 ft AFL" }
          ]
        },
        {
          id: "climbing_transition_alt",
          type: "callout",
          who: "PF/PM",
          title: "Climbing Through Transition Altitude",
          trigger: "Climbing through transition altitude",
          description: "At the transition altitude, both pilots switch their altimeters from local QNH to standard pressure (STD). This ensures consistent altitude references when operating in the flight level system above the transition altitude.",
          items: [
            { text: "Both set PFD/STBY altimeters to STD", critical: true }
          ],
          images: [
            { file: "trans_alt_pf", label: "Transition altitude — PF" },
            { file: "trans_alt_pm", label: "Transition altitude — PM" }
          ],
          panelState: [
            "PFD altimeters: STD (standard pressure)",
            "Standby altimeter: STD"
          ],
          gotchas: [],
          timing: "",
          aomRef: "",
          relatedFlashcards: ["Flight Instruments"],
          callouts: [
            { who: "PM", says: "Transition, Standard", when: "Climbing through transition altitude" },
            { who: "PF", says: "Standard", when: "Response — both set altimeters to STD" }
          ]
        },
        {
          id: "climbing_fl180",
          type: "flow",
          who: "CA/FO",
          title: "Climbing Through FL180",
          trigger: "Climbing through 18,000 ft MSL or FL180",
          description: "Above FL180, exterior lights used for low-altitude visibility are turned off to preserve bulb life. Landing, runway turnoff, and wing lights go off while navigation and anti-collision lights remain on for the entire flight.",
          items: [
            { num: 1, name: "Landing Lights", setting: "OFF", critical: false },
            { num: 2, name: "Runway Turnoff Lights", setting: "OFF", critical: false },
            { num: 3, name: "Wing Lights", setting: "OFF", critical: false }
          ],
          images: [],
          panelState: [
            "Landing/Rwy Turnoff/Wing lights: OFF (bulb life, not needed above FL180)",
            "NAV lights and ANTI-COL: remain ON for entire flight",
            "Position lights: STROBE & STEADY stays set from takeoff"
          ],
          gotchas: [],
          timing: "",
          aomRef: "",
          relatedFlashcards: ["Aircraft Lighting"]
        }
      ]
    },

    // ========================================================
    // PHASE 12 — CRUISE / ENROUTE
    // ========================================================
    {
      id: "cruise_enroute",
      number: 12,
      title: "Cruise / Enroute",
      category: "flight",
      steps: [
        {
          id: "cruise_pf_tasks",
          type: "info",
          who: "PF",
          title: "PF Cruise Tasks",
          trigger: "During cruise flight",
          description: "PF manages flight optimization during cruise: setting minimum drag trim, checking descent speed, optimizing the FMS flight plan, updating cruise winds, and entering descent forecasts.",
          items: [
            { text: "Minimum Drag Trim Setting", critical: false },
            { text: "Standard Descent Speed - Check", critical: false },
            { text: "FMS+ Flight Plan Optimization", critical: false },
            { text: "Updating Cruise Winds", critical: false },
            { text: "Entering Descent Forecasts", critical: false }
          ],
          images: [],
          panelState: [],
          gotchas: [],
          timing: "",
          aomRef: "",
          relatedFlashcards: ["Flight Management Systems", "Autoflight", "Performance"]
        },
        {
          id: "cruise_pm_tasks",
          type: "info",
          who: "PM",
          title: "PM Cruise Tasks",
          trigger: "During cruise flight",
          description: "PM handles cruise housekeeping: managing center fuel pumps, completing the initial climb/cruise PA, maintaining the fuel log, reviewing depressurization routes, sending position reports, and checking oil quantities.",
          items: [
            { text: "Center Fuel Pump(s) - manage", critical: false },
            { text: "Accomplish initial climb/cruise PA", critical: false },
            { text: "Fuel Log - Maintain", critical: false },
            { text: "Depressurization Routes", critical: false },
            { text: "Company Position Reports", critical: false },
            { text: "[3RA-3VM] Oil Quantity Check", critical: false }
          ],
          images: [],
          panelState: [],
          gotchas: [
            "Center tank pumps: turn OFF when center tank is empty (LOW PRESSURE light)",
            "Monitor fuel balance between L and R main tanks",
            "Fuel log: record fuel qty at regular intervals per company policy",
            "Compare actual burn vs planned — flag discrepancies early"
          ],
          timing: "",
          aomRef: "",
          relatedFlashcards: ["Fuel", "Pressurization", "Communications"]
        },
        {
          id: "prior_to_tod",
          type: "flow",
          who: "PF/PM",
          title: "Prior to Planned Top of Descent",
          trigger: "Prior to top of descent",
          description: "Both pilots prepare for descent before reaching the top-of-descent point. PF loads the arrival/approach in the FMS and sets autobrakes, while PM obtains ATIS, checks pressurization, completes the recall check, and makes the before-descent PA.",
          items: [
            { num: 1, name: "FMS", setting: "Load/Verify Arrival/Approach Procedure", critical: false },
            { num: 2, name: "Approach Preparation", setting: "Complete", critical: false },
            { num: 3, name: "Autobrakes", setting: "As Required", critical: false },
            { num: 4, name: "Terrain Display", setting: "Select", critical: false },
            { num: 5, name: "Engine Anti-Ice", setting: "As Required", critical: false },
            { num: 6, name: "Mechanical Discrepancy Notifications", setting: "", critical: false, note: "--- PM Tasks ---" },
            { num: 7, name: "ATIS", setting: "Obtain", critical: false },
            { num: 8, name: "Approach Preparation", setting: "Complete", critical: false },
            { num: 9, name: "Pressurization", setting: "Checked", critical: false },
            { num: 10, name: "Recall Check", setting: "", critical: false },
            { num: 11, name: "Terrain Display", setting: "Selected", critical: false },
            { num: 12, name: "Before Descent PA", setting: "Accomplish", critical: false }
          ],
          images: [
            { file: "desc_toc", label: "Top of descent preparation" }
          ],
          panelState: [],
          gotchas: [
            "FMS: arrival/approach procedure loaded and verified",
            "Landing performance: verify runway length adequate for conditions",
            "Arrival briefing covers: weather, approach type, missed approach, threats",
            "BOTH pilots independently verify approach setup in FMS",
            "Autobrake: typically 2 or 3 for normal ops, MAX for short/contaminated"
          ],
          timing: "",
          aomRef: "",
          relatedFlashcards: ["Flight Management Systems", "Autoflight", "Performance", "GPWS", "Weather Radar", "Ice and Rain Protection", "Pressurization"]
        }
      ]
    },

    // ========================================================
    // PHASE 13 — DESCENT / ARRIVAL
    // ========================================================
    {
      id: "descent_arrival",
      number: 13,
      title: "Descent / Arrival",
      category: "approach",
      steps: [
        {
          id: "descent_flows",
          type: "flow",
          who: "PF/PM",
          title: "Descent Flows",
          trigger: "Descending through 18,000 ft MSL or FL180",
          description: "Configuring the aircraft at key descent altitudes. Lights come back on through FL180, altimeters are set to local QNH at the transition level, and sterile cockpit begins at 10,000 ft AFL. These are the reverse of the climb actions.",
          items: [
            { num: 1, name: "Exterior Lights", setting: "Set (CA: Landing + Runway Lights ON, FO: Wing Light ON)", critical: false, note: "--- Through FL180 ---" },
            { num: 2, name: "FASTEN BELTS switch", setting: "ON", critical: false },
            { num: 3, name: "PFD/STBY Altimeters", setting: "Set to local altimeter setting", critical: false, note: "--- Through Transition Level ---" },
            { num: 4, name: "Sterile Flightdeck", setting: "Chime", critical: false, note: "--- Through 10,000' AFL ---" }
          ],
          images: [
            { file: "desc_pf", label: "Descent — PF items" },
            { file: "desc_pm", label: "Descent — PM items" }
          ],
          panelState: [
            "Landing + Rwy Turnoff + Wing lights: back ON (see and be seen)",
            "FASTEN BELTS: ON (alerts passengers for descent/turbulence)"
          ],
          gotchas: [],
          timing: "",
          aomRef: "",
          relatedFlashcards: ["Aircraft Lighting"]
        },
        {
          id: "descent_checklist",
          type: "checklist",
          who: "PF/PM",
          title: "Descent Checklist",
          trigger: "After descent flows complete",
          description: "Formal challenge-and-response checklist verifying pressurization, recall, autobrake setting, VREF, and the landing runway/approach. Ensures both pilots agree on the critical approach parameters before continuing the descent.",
          items: [],
          images: [
            { file: "desc_cl", label: "Descent checklist" }
          ],
          panelState: [],
          gotchas: [],
          timing: "",
          aomRef: "",
          relatedFlashcards: [],
          checklistFormat: "full",
          initiator: "PF",
          initiatorSays: "Descent Checklist",
          completionCall: "Descent Checklist Complete",
          completionWho: "PM",
          challengeResponse: [
            { challenge: "Pressurization", response: "Land alt ___, set", who: "PM" },
            { challenge: "Recall", response: "Checked", who: "PM" },
            { challenge: "Autobrake", response: "___, set", who: "PM" },
            { challenge: "VREF", response: "___ knots", who: "Both" },
            { challenge: "Landing Runway / Approach", response: "Runway ___, ___ approach", who: "Both" }
          ],
          callouts: [
            { who: "PF", says: "Descent Checklist", when: "After descent flows complete" },
            { who: "PM", says: "(Challenge & response items)", when: "Completing checklist" },
            { who: "PM", says: "Descent Checklist Complete", when: "Upon completion" }
          ]
        },
        {
          id: "descending_transition_level",
          type: "callout",
          who: "PF/PM",
          title: "Descending Through Transition Level",
          trigger: "Descending through transition level",
          description: "At the transition level, both pilots switch altimeters from standard pressure back to local QNH. This is the reverse of what was done during the climb at the transition altitude, ensuring accurate altitude readings for the approach.",
          items: [
            { text: "Both set PFD/STBY altimeters to local QNH", critical: true }
          ],
          images: [
            { file: "trans_lvl_pf", label: "Transition level — PF" },
            { file: "trans_lvl_pm", label: "Transition level — PM" }
          ],
          panelState: [
            "PFD altimeters: local QNH setting",
            "Standby altimeter: local QNH setting"
          ],
          gotchas: [
            "Climbing: transition ALTITUDE (set STD above it)",
            "Descending: transition LEVEL (set local QNH below it)",
            "Both pilots set altimeters AND read back the setting",
            "In US: transition altitude/level is 18,000 ft (FL180)"
          ],
          timing: "",
          aomRef: "",
          relatedFlashcards: ["Flight Instruments"],
          callouts: [
            { who: "PM", says: "Transition, <altimeter setting>", when: "Descending through transition level" },
            { who: "PF", says: "Transition, <altimeter setting>", when: "Response — both set local altimeters" }
          ]
        },
        {
          id: "descending_10k",
          type: "callout",
          who: "PF/PM",
          title: "Descending Through 10,000 ft AFL",
          trigger: "Descending through 10,000 ft AFL",
          description: "Entering the sterile cockpit environment for the approach phase. PF chimes to signal the crew, and PM notifies the flight attendants. No non-essential conversation or tasks below 10,000 ft.",
          items: [
            { text: "PF: Sterile Flightdeck - Chime", critical: false },
            { text: "PM: Flight Attendants - Notify", critical: false }
          ],
          images: [],
          panelState: [],
          gotchas: [],
          timing: "",
          aomRef: "",
          relatedFlashcards: ["Communications"],
          callouts: [
            { who: "PF", says: "(Chime)", when: "Descending through 10,000 ft AFL — Sterile Flightdeck" },
            { who: "PM", says: "(Notifies Flight Attendants)", when: "Descending through 10,000 ft AFL" }
          ]
        }
      ]
    },

    // ========================================================
    // PHASE 14 — BEFORE LANDING / APPROACH
    // ========================================================
    {
      id: "before_landing_approach",
      number: 14,
      title: "Before Landing / Approach",
      category: "approach",
      steps: [
        {
          id: "initial_approach",
          type: "callout",
          who: "PF/PM",
          title: "Initial Approach — Actions & Callouts",
          trigger: "Prior to starting approach — waypoints sequenced properly",
          description: "Configuring the aircraft for the initial approach segment. PF calls for the first flap setting while PM verifies airspeed is at or below the maximum for that setting before extending. Speed must always be verified before any flap change.",
          items: [
            { text: "PF: Check airspeed, call for initial flap setting", critical: false },
            { text: "PM: Verify speed, select requested flap setting, monitor extension", critical: false },
            { text: "PF: Set/request speed", critical: false }
          ],
          images: [],
          panelState: [],
          gotchas: [
            "Verify airspeed is at or below maximum for requested flap setting before extending",
            "PM must verify speed before selecting flaps — never extend into overspeed"
          ],
          timing: "",
          aomRef: "AOM Ch10: Initial Approach Actions & Callouts",
          relatedFlashcards: ["Autoflight", "Flight Controls"],
          callouts: [
            { who: "PF", says: "Flaps ___.", when: "Initial approach — requesting first flap setting" },
            { who: "PM", says: "Speed verified.", when: "After verifying airspeed for flap setting" }
          ],
          calloutSequence: [
            { type: "milestone", text: "Initial Approach" },
            { who: "PF", type: "action", text: "Check airspeed for flap extension" },
            { who: "PF", type: "callout", text: "Flaps ___." },
            { who: "PM", type: "action", text: "Verify airspeed for requested flap setting" },
            { who: "PM", type: "callout", text: "Speed verified." },
            { who: "PM", type: "action", text: "Select requested flap setting, monitor extension" },
            { who: "PF", type: "action", text: "Set or request approach speed" }
          ]
        },
        {
          id: "before_landing_flows",
          type: "flow",
          who: "PF/PM",
          title: "Before Landing Flows",
          trigger: "When ready for before landing items",
          description: "PF calls for the Before Landing Checklist and PM completes it via challenge-and-response. The checklist is split by a dividing line: items above the line are done first with initial flap/gear configuration, items below the line wait for final flaps.",
          items: [
            { num: 1, name: "PF calls", setting: "\"Before Landing Checklist\"", critical: false },
            { num: 2, name: "PM completes via challenge & response", setting: "\"To The Line\"", critical: false }
          ],
          images: [
            { file: "blanding_pf", label: "Before Landing — PF items" },
            { file: "blanding_pm", label: "Before Landing — PM items" }
          ],
          panelState: [],
          gotchas: [
            "Before Landing CL has a dividing line between initial and final items",
            "\"To the Line\": initial items done (gear, flaps partial, speeds set)",
            "\"Below the Line\": final items after last flap extension (landing config)",
            "Both pilots verify ALL tabs closed = fully configured for landing"
          ],
          timing: "",
          aomRef: "",
          relatedFlashcards: ["Autoflight", "Flight Instruments", "Landing Gear", "Flight Controls"]
        },
        {
          id: "before_landing_checklist_ttl",
          type: "checklist",
          who: "PF/PM",
          title: "Before Landing Checklist — To the Line",
          trigger: "When ready for before landing items",
          description: "The first portion of the Before Landing Checklist, completed to the dividing line. Covers speedbrake armed, landing gear down with three green lights, and the current flap setting verified. Final configuration items wait until below the line.",
          items: [],

          images: [
            { file: "blanding_cl_1", label: "Before Landing checklist page 1" },
            { file: "blanding_cl_2", label: "Before Landing checklist page 2" }
          ],
          panelState: [],
          gotchas: [],
          timing: "",
          aomRef: "",
          relatedFlashcards: [],
          checklistFormat: "toTheLine",
          initiator: "PF",
          initiatorSays: "Before Landing Checklist",
          completionCall: "To The Line",
          completionWho: "PM",
          challengeResponse: [
            { challenge: "Speedbrake", response: "Armed, green light", who: "PM" },
            { challenge: "Landing Gear", response: "Down, 3 green", who: "PM" },
            { challenge: "Flaps", response: "___, green light", who: "PM" }
          ],
          callouts: [
            { who: "PF", says: "Before Landing Checklist", when: "When ready for before landing items" },
            { who: "PM", says: "To The Line", when: "Upon completion to the line" }
          ]
        },
        {
          id: "final_flap_extension",
          type: "callout",
          who: "PF/PM",
          title: "Final Flap Extension",
          trigger: "When final flap extension is desired",
          description: "PF calls for the final flap setting and requests completion of below-the-line items. After PM selects final flaps and completes the checklist, both pilots visually verify all checklist tabs are closed, confirming full landing configuration.",
          items: [],
          images: [
            { file: "blanding_cl_btl", label: "Before Landing checklist — below the line" }
          ],
          panelState: [],
          gotchas: [
            "Both pilots visually verify all tabs are closed out after checklist complete"
          ],
          timing: "",
          aomRef: "",
          relatedFlashcards: ["Flight Controls"],
          callouts: [
            { who: "PF", says: "Flaps ___, Below The Line", when: "When final flap extension desired" },
            { who: "PM", says: "Before Landing Checklist Complete", when: "Upon completion below the line" }
          ]
        },
        {
          id: "ils_approach_sequence",
          type: "callout",
          who: "PF/PM",
          title: "ILS Approach Sequence",
          trigger: "On ILS approach",
          description: "The full ILS approach from clearance through the landing decision at DA(H). Progresses systematically through LOC capture, glideslope capture, gear and flap extension, stabilization checks at 1,000 and 500 ft, and the final continue/go-around decision at minimums.",
          items: [
            { text: "PF: Select/Request APP mode", critical: false },
            { text: "PF: LOC capture — verify VOR/LOC on FMA", critical: false },
            { text: "PF: Gear down, Flaps 15, arm speedbrake", critical: false },
            { text: "PF: Glideslope capture — set missed approach altitude", critical: false },
            { text: "PF: Final flap extension — below the line", critical: true },
            { text: "PM: 1000 ft — stabilized approach check", critical: true },
            { text: "PM: 500 ft — speed/sink call", critical: true },
            { text: "PM: Plus hundred — approaching DA(H)", critical: true },
            { text: "PM: Minimums — PF decides continue or go around", critical: true }
          ],
          images: [
            { file: "ils_cat1_1", label: "ILS CAT I procedure 1" },
            { file: "ils_cat1_2", label: "ILS CAT I procedure 2" },
            { file: "ils_cat1_3", label: "ILS CAT I procedure 3" },
            { file: "ils_cat1_4", label: "ILS CAT I procedure 4" },
            { file: "ils_cat1_5", label: "ILS CAT I procedure 5" },
            { file: "ils_cat1_6", label: "ILS CAT I procedure 6" },
            { file: "40_ils_cat1_callouts_1", label: "ILS CAT I callouts 1" },
            { file: "40_ils_cat1_callouts_2", label: "ILS CAT I callouts 2" },
            { file: "40_ils_cat1_callouts_3", label: "ILS CAT I callouts 3" }
          ],
          panelState: [],
          gotchas: [
            "On correct lateral and vertical path",
            "Speed: VREF to VREF+20 (no more than +20)",
            "Correct configuration: gear down, landing flaps set",
            "Thrust: appropriate for configuration",
            "If NOT stabilized by 1000 ft (IMC) or 500 ft (VMC): PM calls 'Unstable, go around.'",
            "Deviation callouts: 'Airspeed.' / 'Sink rate.' / 'Localizer.' / 'Glideslope.'",
            "AIII must be used below RVR 1800; if unavailable, AII/IMC may be used down to RVR 1200",
            "Callout not required after PF says 'Continuing.'"
          ],
          timing: "",
          aomRef: "AOM Ch10: ILS CAT I/II/III Actions & Callouts; AOM Ch9: Non-Precision / RNAV approach procedures",
          relatedFlashcards: ["Autoflight", "Flight Instruments", "Navigation", "GPWS", "HUD"],
          standards: [
            "Stabilized by 1000 ft AFL (IMC) or 500 ft AFL (VMC)",
            "On correct lateral and vertical path",
            "Speed: VREF to VREF+20 (no more than +20 knots)",
            "Configuration: gear down, landing flaps set",
            "Thrust: appropriate for configuration",
            "If NOT stabilized by 1000 ft (IMC) / 500 ft (VMC): GO AROUND",
            "Deviation callouts required if speed, sink rate, or flight path deviate from normal parameters"
          ],
          callouts: [
            { who: "PF", says: "LOC capture.", when: "After VOR/LOC annunciates on FMA" },
            { who: "PF", says: "Gear down.", when: "Approaching 1-dot G/S or NLT 2000 ft AFL" },
            { who: "PF", says: "Flaps 15.", when: "After gear down" },
            { who: "PM", says: "Speed verified.", when: "After verifying airspeed for flap setting" },
            { who: "PF", says: "Glideslope capture. Set missed approach altitude.", when: "After G/S captures" },
            { who: "PF", says: "Flaps ___, below the line.", when: "Prior to 1000 ft AFL — final flap extension" },
            { who: "PM", says: "Speed verified.", when: "After verifying airspeed for final flap setting" },
            { who: "PM", says: "1000.", when: "Passing 1000 ft AFL (auto callout)" },
            { who: "PM", says: "Stable.", when: "At 1000 ft AFL — confirming stabilized approach" },
            { who: "PM", says: "500.", when: "Passing 500 ft AFL (auto callout)" },
            { who: "PM", says: "Stable, target, sink ___.", when: "At 500 ft AFL — speed relative to target, sink rate" },
            { who: "PM", says: "Plus hundred.", when: "100 ft above DA(H) (auto callout)" },
            { who: "PM", says: "Minimums.", when: "At DA(H) (auto callout)" },
            { who: "PM", says: "No contact.", when: "If approach lights and runway environment NOT in sight" },
            { who: "PM", says: "Approach lights.", when: "If only approach lights in sight" },
            { who: "PM", says: "Runway.", when: "If runway environment in sight" },
            { who: "PF", says: "Continuing.", when: "If runway environment in sight — continuing to land" }
          ],
          calloutSequence: [
            // ── Cleared for Approach ──
            { type: "milestone", text: "Cleared for Approach" },
            { who: "PF", type: "action", text: "Select/Request APP" },
            // ── LOC Capture ──
            { type: "milestone", text: "LOC Capture" },
            { who: "PF", type: "callout", text: "LOC capture." },
            { who: "PF", type: "action", text: "Verify VOR/LOC on FMA" },
            // ── Approaching 1-dot G/S (NLT 2000' AFL) ──
            { type: "milestone", text: "Approaching 1-dot G/S (NLT 2000' AFL)" },
            { who: "PF", type: "callout", text: "Gear down." },
            { who: "PM", type: "action", text: "Check airspeed, select gear down" },
            { who: "PF", type: "callout", text: "Flaps 15." },
            { who: "PF", type: "action", text: "Arm SPEEDBRAKE" },
            { who: "PM", type: "callout", text: "Speed verified." },
            { who: "PM", type: "action", text: "Select flaps 15, set speed if requested" },
            // ── G/S Capture ──
            { type: "milestone", text: "G/S Capture" },
            { who: "PF", type: "callout", text: "Glideslope capture. Set missed approach altitude." },
            { who: "PM", type: "action", text: "Set missed approach altitude on MCP" },
            // ── Final Approach Verification Altitude Fix ──
            { type: "milestone", text: "Final Approach Verification Altitude Fix" },
            { who: "PF", type: "action", text: "Verify Final Approach Verification Altitude" },
            { who: "PM", type: "action", text: "Verify Final Approach Verification Altitude" },
            // ── Prior to 1000' AFL ──
            { type: "milestone", text: "Prior to 1000' AFL" },
            { who: "PF", type: "callout", text: "Flaps ___, below the line." },
            { who: "PM", type: "callout", text: "Speed verified." },
            { who: "PM", type: "action", text: "Select requested flaps, complete Before Landing CL below the line" },
            { who: "PF", type: "action", text: "Visually confirm all tabs closed out" },
            { who: "PM", type: "action", text: "Visually confirm all tabs closed out" },
            // ── 1000' AFL ──
            { type: "milestone", text: "1000' AFL" },
            { who: "PM", type: "callout", text: "1000." },
            { who: "PM", type: "callout", text: "Stable." },
            // ── 500' AFL ──
            { type: "milestone", text: "500' AFL" },
            { who: "PM", type: "callout", text: "500." },
            { who: "PM", type: "callout", text: "Stable, target, sink ___." },
            // ── 100' Above DA(H) ──
            { type: "milestone", text: "100' Above DA(H)" },
            { who: "PM", type: "callout", text: "Plus hundred." },
            { who: "PM", type: "action", text: "Divide time between instruments and scanning outside" },
            // ── At DA(H) ──
            { type: "milestone", text: "At DA(H)" },
            { who: "PM", type: "callout", text: "Minimums." },
            { who: "PM", type: "callout", text: "No contact. (if nothing in sight — go around)" },
            { who: "PM", type: "callout", text: "Approach lights. (if only approach lights in sight)" },
            { who: "PM", type: "callout", text: "Runway. (if runway environment in sight)" },
            { who: "PF", type: "callout", text: "Continuing. (if runway in sight)" }
          ]
        }
      ]
    },

    // ========================================================
    // PHASE 15 — LANDING
    // ========================================================
    {
      id: "landing",
      number: 15,
      title: "Landing",
      category: "approach",
      steps: [
        {
          id: "normal_landing",
          type: "callout",
          who: "PF/PM",
          title: "Normal Landing",
          trigger: "After decision to land",
          description: "Touchdown through rollout deceleration. PM verifies speedbrake deployment and calls out any anomalies, monitors reverse thrust, and makes speed calls at 80 and 60 knots. PF applies reverse as needed and transitions to manual braking by 60 knots.",
          items: [
            { text: "PF: Verify thrust levers are closed", critical: false },
            { text: "Both: Verify SPEEDBRAKE lever is FULL UP", critical: true },
            { text: "PM: Confirm speedbrakes deployed or call no speedbrakes", critical: true },
            { text: "Both: Monitor autobrakes, if selected", critical: false },
            { text: "PF: Raise reverse thrust levers to interlocks, apply reverse as needed", critical: false },
            { text: "PM: Monitor reverse thrust — call out single/no reverse if applicable", critical: false },
            { text: "PM: 80 knot and 60 knot speed calls", critical: true },
            { text: "PF: By 60 kts — reduce to idle reverse, transition to manual braking", critical: false }
          ],
          images: [
            { file: "landing_1", label: "Landing procedure 1" },
            { file: "landing_2", label: "Landing procedure 2" },
            { file: "landing_3", label: "Landing procedure 3" },
            { file: "50_normal_landing_1", label: "Normal landing reference 1" },
            { file: "50_normal_landing_2", label: "Normal landing reference 2" },
            { file: "50_normal_landing_3", label: "Normal landing reference 3" }
          ],
          panelState: [],
          gotchas: [
            "CAUTION: Low energy state with thrust levers at idle can cause hard landing or tailstrike",
            "If speedbrakes fail to deploy: PM calls 'No speedbrakes.' — CA manually deploys SPEEDBRAKE lever",
            "If CA fails to deploy speedbrakes: FO manually deploys SPEEDBRAKE lever",
            "WARNING: After reverse thrust initiated, a full stop landing must be made",
            "If either engine fails to enter reverse: use caution applying reverse on remaining engine",
            "PF: By 60 kts, reduce reverse to idle; transition to manual braking at taxi speed",
            "If AUTO BRAKE DISARM light illuminates: PM calls 'Autobrakes off.'",
            "FO landing: CA states 'My aircraft.' and FO responds 'Your aircraft.'"
          ],
          timing: "",
          aomRef: "AOM Ch12: Normal Landing / FO Landing procedures",
          relatedFlashcards: ["Engines", "Flight Controls", "Landing Gear", "Performance"],
          standards: [
            "Touchdown: firm but smooth — do not float excessively",
            "Reverse thrust: deploy promptly after main gear touchdown",
            "PM verifies: speedbrake deployed (auto or manual), reversers deployed",
            "PM calls deceleration method: 'Autobrakes' or status update",
            "At 60 kts: reduce reverse to idle, transition to manual braking",
            "Do not use reverse thrust below 60 kts (FOD risk)",
            "Total landing distance = air distance + ground distance — pilot controls both"
          ],
          callouts: [
            { who: "PM", says: "Deployed.", when: "After touchdown — confirming speedbrakes (ground spoilers) deployed" },
            { who: "PM", says: "No speedbrakes.", when: "If speedbrakes do not deploy or fail to remain deployed" },
            { who: "PM", says: "Single reverse.", when: "If there is no REV indication on one engine or indication stays amber" },
            { who: "PM", says: "No reverse.", when: "If neither engine enters reverse" },
            { who: "PM", says: "80.", when: "Passing 80 knots during rollout" },
            { who: "PM", says: "60.", when: "Passing 60 knots during rollout" },
            { who: "PF", says: "Manual braking.", when: "When transitioning from autobrakes to manual braking" },
            { who: "PM", says: "Autobrakes off.", when: "If AUTO BRAKE DISARM light illuminates" }
          ],
          calloutSequence: [
            // ── Touchdown ──
            { type: "milestone", text: "Touchdown" },
            { who: "PF", type: "action", text: "Verify thrust levers are closed" },
            { who: "PF", type: "action", text: "Verify SPEEDBRAKE lever is FULL UP" },
            { who: "PM", type: "action", text: "Verify SPEEDBRAKE lever is FULL UP" },
            { who: "PM", type: "callout", text: "Deployed." },
            { who: "PM", type: "callout", text: "No speedbrakes. (if speedbrakes do not deploy)" },
            { who: "PF", type: "action", text: "Manually deploy SPEEDBRAKE lever (if speedbrakes do not deploy)" },
            { who: "PF", type: "action", text: "Monitor autobrakes, if selected" },
            { who: "PM", type: "action", text: "Monitor autobrakes, if selected" },
            { who: "PF", type: "action", text: "Raise reverse thrust levers to interlocks" },
            { who: "PF", type: "action", text: "Apply reverse thrust as needed" },
            // ── Reverse Thrust Check ──
            { type: "milestone", text: "Reverse Thrust Check" },
            { who: "PM", type: "callout", text: "Single reverse. (if one engine fails to enter reverse)" },
            { who: "PM", type: "callout", text: "No reverse. (if neither engine enters reverse)" },
            // ── 80 Knots ──
            { type: "milestone", text: "80 Knots" },
            { who: "PM", type: "callout", text: "80." },
            // ── 60 Knots ──
            { type: "milestone", text: "60 Knots" },
            { who: "PM", type: "callout", text: "60." },
            { who: "PF", type: "action", text: "Reduce reverse to idle, move reverse levers full down" },
            // ── Approaching Taxi Speed ──
            { type: "milestone", text: "Approaching Taxi Speed" },
            { who: "PF", type: "action", text: "Transition to manual braking" },
            { who: "PF", type: "callout", text: "Manual braking." },
            { who: "PM", type: "callout", text: "Autobrakes off. (if AUTO BRAKE DISARM light illuminates)" },
            { who: "PM", type: "action", text: "Verify REV indication extinguished" }
          ]
        }
      ]
    },

    // ========================================================
    // PHASE 16 — GO-AROUND (if needed)
    // ========================================================
    {
      id: "go_around",
      number: 16,
      title: "Go-Around",
      category: "approach",
      steps: [
        {
          id: "normal_go_around",
          type: "callout",
          who: "PF/PM",
          title: "Normal Go-Around",
          trigger: "Decision to go around at or before minimums",
          description: "Executing a go-around from the decision point. PF presses TOGA, pitches up, and calls for flap retraction. PM sets flaps, verifies thrust and pitch mode, confirms positive rate, and raises the gear. The crew then flies the published missed approach procedure.",
          items: [
            { text: "PF: Press TO/GA switch, call go around and initial flap setting", critical: true },
            { text: "PF: Rotate to go-around pitch attitude", critical: true },
            { text: "PM: Set flaps as requested, verify pitch FMA TO/GA, verify desired thrust set", critical: true },
            { text: "PM: Verify positive rate of climb on altimeter", critical: true },
            { text: "PF: Verify positive rate of climb, call gear up", critical: true },
            { text: "PF: Execute published missed approach or proceed as instructed by ATC", critical: false },
            { text: "PF: Above 400 ft RA — verify/call for appropriate roll mode, retract flaps on schedule", critical: false }
          ],
          images: [
            { file: "goaround_1", label: "Go-around procedure 1" },
            { file: "goaround_2", label: "Go-around procedure 2" },
            { file: "goaround_3", label: "Go-around procedure 3" },
            { file: "60_go_around_1", label: "Go-around reference 1" },
            { file: "60_go_around_2", label: "Go-around reference 2" }
          ],
          panelState: [],
          gotchas: [
            "TOGA press: sets go-around thrust, activates FD go-around mode",
            "Flaps 15 first (if full flaps), then clean up on schedule",
            "Positive rate confirmed on VSI before calling Gear Up",
            "FD commands initial pitch — follow it, do not over-rotate",
            "PM responsible for flap retraction schedule and ATC comm",
            "If engine failure during go-around: see engine-out go-around procedure"
          ],
          timing: "",
          aomRef: "AOM Ch11: Go-Around / Engine-Out Go-Around",
          relatedFlashcards: ["Autoflight", "Engines", "Flight Controls", "Landing Gear", "Performance"],
          standards: [
            "GO AROUND required if not stabilized by 1000 ft AFL (IMC) or 500 ft AFL (VMC)",
            "Engine failure on final approach with insufficient thrust",
            "Loss of Category III system capability below 1000 ft",
            "Significant change in weather or runway conditions",
            "Windshear or GPWS warning",
            "ATC instruction to go around",
            "Loss of required visual reference at DA(H) / MDA(H)",
            "First TO/GA press: reduced go-around thrust (1000–2000 fpm climb)",
            "Second TO/GA press: full go-around thrust (if needed)"
          ],
          callouts: [
            { who: "PF", says: "Go around, TOGA.", when: "Initiating go-around — pressing TO/GA switch" },
            { who: "PF", says: "Flaps 15.", when: "If landing from Flaps 30 or 40 approach" },
            { who: "PF", says: "Flaps 1.", when: "If landing from Flaps 15 approach" },
            { who: "PM", says: "Positive rate.", when: "After verifying positive rate of climb on altimeter" },
            { who: "PF", says: "Gear up.", when: "After verifying positive rate of climb on altimeter" },
            { who: "PF", says: "Set missed approach altitude.", when: "After gear up" },
            { who: "PF", says: "Flaps ___.", when: "Above 400 ft RA — retract flaps on schedule" },
            { who: "PF", says: "Flaps up, after takeoff checklist.", when: "Final flap retraction — requesting clean config and checklist" },
            { who: "PF", says: "VNAV.", when: "After flap retraction — or 'LVL CHG, set speed.'" }
          ],
          calloutSequence: [
            // ── Go-Around ──
            { type: "milestone", text: "Go-Around" },
            { who: "PF", type: "callout", text: "Go around, TOGA." },
            { who: "PF", type: "action", text: "Push TO/GA switch" },
            { who: "PF", type: "action", text: "Verify thrust increases" },
            { who: "PF", type: "callout", text: "Flaps 15. (from Flaps 30/40)" },
            { who: "PF", type: "callout", text: "Flaps 1. (from Flaps 15)" },
            { who: "PF", type: "action", text: "Rotate to go-around pitch attitude" },
            { who: "PM", type: "action", text: "Set Flaps as requested" },
            { who: "PM", type: "action", text: "Verify pitch FMA TO/GA" },
            { who: "PM", type: "action", text: "Verify desired thrust set" },
            // ── Positive Rate of Climb ──
            { type: "milestone", text: "Positive Rate of Climb" },
            { who: "PM", type: "action", text: "Verify positive rate on altimeter" },
            { who: "PM", type: "callout", text: "Positive rate." },
            { who: "PF", type: "action", text: "Verify positive rate on altimeter" },
            { who: "PF", type: "callout", text: "Gear up." },
            { who: "PF", type: "action", text: "Execute published missed approach" },
            { who: "PM", type: "action", text: "Position gear lever UP, monitor speed and attitude" },
            { who: "PF", type: "callout", text: "Set missed approach altitude." },
            { who: "PM", type: "action", text: "Reset missed approach altitude, advise ATC" },
            // ── Above 400' RA ──
            { type: "milestone", text: "Above 400' RA" },
            { who: "PF", type: "action", text: "Verify or call for appropriate roll mode" },
            { who: "PF", type: "action", text: "Check airspeed, retract flaps on schedule" },
            { who: "PF", type: "callout", text: "Flaps ___." },
            { who: "PM", type: "action", text: "Check airspeed, select proper flap setting" },
            { who: "PF", type: "callout", text: "Flaps up, after takeoff checklist." },
            { who: "PM", type: "action", text: "Select flaps up, monitor retraction" },
            // ── After Flap Retraction ──
            { type: "milestone", text: "After Flap Retraction" },
            { who: "PF", type: "callout", text: "VNAV." },
            { who: "PM", type: "action", text: "Select VNAV or LVL CHG, set speed" },
            { who: "PM", type: "action", text: "Accomplish PM After Takeoff Flow and Checklist" }
          ]
        }
      ]
    },

    // ========================================================
    // PHASE 17 — AFTER LANDING
    // ========================================================
    {
      id: "after_landing",
      number: 17,
      title: "After Landing",
      category: "arrival",
      steps: [
        {
          id: "ca_after_landing_flow",
          type: "flow",
          who: "CA",
          title: "CA After Landing Flow",
          trigger: "After aircraft has cleared the landing runway and CA calls \"Flaps ___\"",
          description: "CA items after clearing the active runway. CA initiates flap retraction by calling for a flap setting, then stows the speedbrake to the down detent and sets exterior lights as required for taxi.",
          items: [
            { num: 1, name: "SPEED BRAKE", setting: "DOWN DETENT", critical: false },
            { num: 2, name: "Exterior lights", setting: "As Required", critical: false }
          ],
          images: [
            { file: "ca_alanding_diagram", label: "CA After Landing diagram" },
            { file: "ca_alanding_exp", label: "CA After Landing expanded" },
            { file: "10_ca_after_landing_flow", label: "CA After Landing flow page" }
          ],
          panelState: [],
          gotchas: [
            "CA initiates flap retraction call — FO does not retract without CA call"
          ],
          timing: "",
          aomRef: "",
          relatedFlashcards: ["Flight Controls", "Aircraft Lighting"],
          callouts: [
            { who: "CA", says: "Flaps ___", when: "After aircraft has cleared the landing runway" }
          ]
        },
        {
          id: "fo_after_landing_flow",
          type: "flow",
          who: "FO",
          title: "FO After Landing Flow",
          trigger: "After CA calls \"Flaps ___\"",
          description: "FO cleanup after landing in response to the CA flap retraction call. Retracts flaps to up, resets stabilizer trim to 5 units for taxi, turns off autobrake, flight directors, and weather radar, and sets lights and anti-ice as required.",
          items: [
            { num: 1, name: "FLAPS", setting: "UP / No Lights", critical: false },
            { num: 2, name: "STABILIZER TRIM", setting: "5 Units", critical: false },
            { num: 3, name: "AUTO BRAKE", setting: "OFF", critical: false },
            { num: 4, name: "FLIGHT DIRECTORS", setting: "OFF", critical: false },
            { num: 5, name: "WX RADAR", setting: "OFF", critical: false },
            { num: 6, name: "Exterior lights", setting: "As Required", critical: false },
            { num: 7, name: "ANTI-ICE switches", setting: "As Required", critical: false }
          ],
          images: [
            { file: "fo_alanding_diagram", label: "FO After Landing diagram" },
            { file: "fo_alanding_exp", label: "FO After Landing expanded" },
            { file: "11_fo_after_landing_flow", label: "FO After Landing flow page" }
          ],
          panelState: [],
          gotchas: [
            "STAB TRIM to 5 units — resets for next flight (standard taxi trim)",
            "WX RADAR OFF: prevents ground personnel radiation exposure",
            "FDs OFF: prevents stale FD commands confusing next approach setup"
          ],
          timing: "",
          aomRef: "",
          relatedFlashcards: ["Flight Controls", "Weather Radar", "Autoflight", "Ice and Rain Protection", "Aircraft Lighting"]
        },
        {
          id: "approaching_parking",
          type: "callout",
          who: "CA/FO",
          title: "Approaching Parking Area",
          trigger: "After ensuring the parking area is clear",
          description: "Approaching the gate area. APU may be started approximately 2 minutes before parking. If single-engine taxi was used, the appropriate pack is turned off to maintain cabin airflow. Both pilots verify the parking area is clear before entering.",
          items: [
            { text: "~2 min before gate: APU Start (if desired)", critical: false },
            { text: "Single engine taxi-in: CA calls shutdown after engine cooldown", critical: false },
            { text: "If engine 1 shutdown: FO selects Right Pack OFF (more FD airflow)", critical: false },
            { text: "If engine 2 shutdown: FO selects Left Pack OFF (more cabin airflow)", critical: false }
          ],
          images: [],
          panelState: [],
          gotchas: [],
          timing: "~2 min before gate: APU start (if desired for gate power). Single engine taxi-in: CA calls shutdown after engine cooldown.",
          aomRef: "",
          relatedFlashcards: ["APU", "Air Conditioning", "Engines"],
          callouts: [
            { who: "CA", says: "Clear Left", when: "After ensuring parking area is clear" },
            { who: "FO", says: "Clear Right", when: "Response to CA" },
            { who: "CA", says: "Shutdown engine no. ___", when: "After engine cooldown, two engine taxi no longer required (single engine taxi-in)" }
          ]
        }
      ]
    },

    // ========================================================
    // PHASE 18 — SHUTDOWN / SECURE
    // ========================================================
    {
      id: "shutdown_secure",
      number: 18,
      title: "Shutdown / Secure",
      category: "arrival",
      steps: [
        {
          id: "ca_shutdown_flow",
          type: "flow",
          who: "CA",
          title: "CA Shutdown Flow",
          trigger: "After aircraft is parked with parking brake set — CA calls \"Shutdown Engine no. 1 (and/or 2)\"",
          description: "CA parking and shutdown items after the aircraft is at the gate. Sets parking brake, manages electrical power, turns off IRS and fuel pumps as required, stows the HUD, completes the Aircraft Maintenance Log, and configures APU or external power.",
          items: [
            { num: 1, name: "PARKING BRAKE", setting: "SET", critical: false },
            { num: 2, name: "FASTEN BELTS", setting: "OFF", critical: false },
            { num: 3, name: "ELECTRICAL", setting: "ON", critical: false },
            { num: 4, name: "IRS Mode Selectors", setting: "OFF", critical: false },
            { num: 5, name: "FUEL PUMPS", setting: "As Required", critical: false },
            { num: 6, name: "HUD", setting: "Stow", critical: false },
            { num: 7, name: "Flightdeck Lights", setting: "As Required", critical: false },
            { num: 8, name: "AML", setting: "Complete", critical: false },
            { num: 9, name: "APU / External Power", setting: "As Required", critical: false }
          ],
          images: [
            { file: "ca_shutdown_diagram", label: "CA Shutdown flow diagram" },
            { file: "ca_shutdown_exp_1", label: "CA Shutdown expanded 1" },
            { file: "ca_shutdown_exp_2", label: "CA Shutdown expanded 2" },
            { file: "12_ca_shutdown_flow", label: "CA Shutdown flow page" }
          ],
          panelState: [],
          gotchas: [],
          timing: "",
          aomRef: "",
          relatedFlashcards: ["Electrical", "Fuel", "HUD", "Navigation", "APU"]
        },
        {
          id: "fo_shutdown_flow",
          type: "flow",
          who: "FO",
          title: "FO Shutdown Flow",
          trigger: "After CA calls engine shutdown",
          description: "FO shutdown tasks after engine shutdown. Moves start levers to cutoff, sets transponder to standby, configures air conditioning for ground ops, turns off window/probe heat and anti-ice, shuts down hydraulic pumps, and records fluid quantities.",
          items: [
            { num: 1, name: "ENGINE START levers", setting: "CUTOFF", critical: false },
            { num: 2, name: "Transponder", setting: "STBY", critical: false },
            { num: 3, name: "Air Conditioning & Bleeds", setting: "Set", critical: false },
            { num: 4, name: "WINDOW HEAT", setting: "OFF", critical: false },
            { num: 5, name: "PROBE HEAT", setting: "AUTO", critical: false },
            { num: 6, name: "ANTI-ICE", setting: "OFF", critical: false },
            { num: 7, name: "ELEC HYD PUMPS", setting: "OFF", critical: false },
            { num: 8, name: "EMER EXIT LIGHTS", setting: "OFF", critical: false },
            { num: 9, name: "ENGINE START SWITCHES", setting: "AUTO", critical: false },
            { num: 10, name: "Oxygen / Engine Oil / Hydraulic Fluid Quantities", setting: "Check", critical: false },
            { num: 11, name: "Arrival Report", setting: "Send", critical: false },
            { num: 12, name: "Flightdeck Lights", setting: "As Required", critical: false }
          ],
          images: [
            { file: "fo_shutdown_diagram", label: "FO Shutdown flow diagram" },
            { file: "fo_shutdown_exp_1", label: "FO Shutdown expanded 1" },
            { file: "fo_shutdown_exp_2", label: "FO Shutdown expanded 2" },
            { file: "13_fo_shutdown_flow", label: "FO Shutdown flow page" }
          ],
          panelState: [],
          gotchas: [
            "PROBE HEAT goes back to AUTO (not OFF) — allows auto operation",
            "ENGINE START switches to AUTO (not OFF)",
            "EMER EXIT LIGHTS to OFF (were armed during flight)",
            "Record O2 qty, oil qty, hyd fluid — for maintenance/next crew",
            "Arrival Report: send via ACARS before leaving flight deck"
          ],
          timing: "",
          aomRef: "",
          relatedFlashcards: ["Engines", "ATC/TCAS", "Air Conditioning", "Ice and Rain Protection", "Hydraulics", "Emergency Equipment", "Oxygen", "ACARS"]
        },
        {
          id: "shutdown_checklist",
          type: "checklist",
          who: "CA/FO",
          title: "Shutdown Checklist",
          trigger: "After shutdown flows complete",
          description: "Formal challenge-and-response checklist confirming all shutdown flow items are complete. Covers fuel pumps, probe heat, hydraulic pumps, and flaps. CA initiates and FO completes.",
          items: [],
          images: [
            { file: "secure_cl_1", label: "Shutdown/Secure checklist page 1" },
            { file: "secure_cl_2", label: "Shutdown/Secure checklist page 2" }
          ],
          panelState: [],
          gotchas: [],
          timing: "",
          aomRef: "",
          relatedFlashcards: [],
          checklistFormat: "full",
          initiator: "CA",
          initiatorSays: "Shutdown Checklist",
          completionCall: "Shutdown Checklist Complete",
          completionWho: "FO",
          challengeResponse: [
            { challenge: "Fuel Pumps", response: "As required", who: "CA" },
            { challenge: "Probe Heat", response: "Auto", who: "FO" },
            { challenge: "Hydraulic Pumps", response: "Off", who: "FO" },
            { challenge: "Flaps", response: "Up, no lights", who: "FO" }
          ],
          callouts: [
            { who: "CA", says: "Shutdown Checklist", when: "After shutdown flows complete" },
            { who: "FO", says: "Shutdown Checklist Complete", when: "Upon completion" }
          ]
        },
        {
          id: "secure_flow",
          type: "flow",
          who: "CA/FO",
          title: "Secure Flow",
          trigger: "When >2 hours between arrival and departure, or as required. Do NOT complete until all passengers have deplaned.",
          description: "Securing the aircraft for extended ground time when more than 2 hours between flights. Shuts down packs, recirc fans, fuel pumps, and APU in sequence. Battery goes off last, but only after waiting for APU cooldown to protect the APU turbine.",
          items: [
            { num: 1, name: "Contact Maintenance", setting: "As Required", critical: false },
            { num: 2, name: "CAB/UTIL", setting: "As Required", critical: false, note: "[3GY-3VM] leave CAB/UTIL switch ON to enable cabin lighting" },
            { num: 3, name: "IFE/PASS", setting: "OFF", critical: false },
            { num: 4, name: "PACKS", setting: "OFF", critical: false },
            { num: 5, name: "L and R RECIRC FAN", setting: "OFF", critical: false },
            { num: 6, name: "FUEL PUMPS", setting: "OFF", critical: false },
            { num: 7, name: "APU", setting: "OFF", critical: false, note: "Delay ~2 min [3AA-3PX] or ~5 min [3RA-3VM] after APU GEN OFF BUS light extinguishes before BAT OFF" },
            { num: 8, name: "(Wait for APU GEN OFF BUS light to extinguish + delay)", setting: "", critical: false },
            { num: 9, name: "BATTERY", setting: "OFF", critical: false }
          ],
          images: [
            { file: "secure_exp_1", label: "Secure flow expanded 1" },
            { file: "secure_exp_2", label: "Secure flow expanded 2" },
            { file: "secure_cl_1", label: "Secure checklist page 1" },
            { file: "secure_cl_2", label: "Secure checklist page 2" }
          ],
          panelState: [],
          gotchas: [
            "Do NOT secure until ALL passengers have deplaned",
            "[3GY-3VM] Leave CAB/UTIL switch ON for cabin lighting",
            "APU cooldown: wait for GEN OFF BUS light to extinguish",
            "Then wait 2 min (NG) or 5 min (MAX) before BAT OFF",
            "If external power connected: GRD PWR OFF, then GROUND SERVICE ON",
            "Only do Secure if >2 hours to next departure"
          ],
          timing: "Perform when >2 hours between arrival and departure, or as required.",
          aomRef: "",
          relatedFlashcards: ["APU", "Electrical", "Air Conditioning", "Fuel"]
        }
      ]
    },
    // ============================================================
    // PHASE 19: MEMORY ITEMS
    // Memory items below are VERBATIM from memory_items.md
    // DO NOT paraphrase — these must be memorized word-for-word
    // ============================================================
    {
      id: "memory_items",
      number: 19,
      title: "Memory Items",
      category: "emergency",
      steps: [
        {
          id: "mem_cabin_alt",
          type: "flow",
          who: "CA/FO",
          title: "Cabin Altitude Warning or Rapid Depressurization",
          trigger: "MEMORY ITEM — No reference material",
          description: "The only two steps you must perform from memory before reaching for the QRC. Get oxygen flowing and establish crew communication immediately — seconds count at high altitude.",
          items: [
            { num: 1, name: "Don oxygen masks and set regulators", setting: "to 100%", critical: true },
            { num: 2, name: "Establish crew communications", setting: "", critical: true }
          ],
          images: [],
          panelState: [],
          gotchas: [
            "Then refer to QRC for remaining items",
            "This is a 2-step memory item — speed is critical",
            "Masks ON before troubleshooting anything"
          ],
          timing: "Immediate action required — seconds count at high altitude",
          aomRef: "QRC: Cabin Altitude Warning / Rapid Depressurization",
          relatedFlashcards: ["Pressurization", "Oxygen"]
        },
        {
          id: "mem_apu_fire",
          type: "flow",
          who: "CA/FO",
          title: "APU Fire",
          trigger: "MEMORY ITEM — No reference material",
          description: "Two-step memory procedure for APU fire. Confirm the correct fire switch before pulling — then pull, rotate to the stop, and hold for 1 second to discharge the bottle.",
          items: [
            { num: 1, name: "APU Fire switch", setting: "Confirm — Pull, rotate to the stop, and hold for 1 second", critical: true },
            { num: 2, name: "APU switch", setting: "OFF", critical: true }
          ],
          images: [],
          panelState: [],
          gotchas: [
            "CONFIRM the correct fire switch before pulling",
            "Pull, ROTATE to the stop, and HOLD for 1 second — discharges the bottle",
            "APU switch OFF after fire handle actioned"
          ],
          timing: "",
          aomRef: "QRC: APU Fire",
          relatedFlashcards: ["APU", "Fire Protection"]
        },
        {
          id: "mem_airspeed_unreliable",
          type: "flow",
          who: "CA/FO",
          title: "Airspeed Unreliable",
          trigger: "MEMORY ITEM — No reference material",
          description: "Disconnect all automation first, then fly known pitch and power settings. The critical numbers: flaps extended = 10° pitch / 80% N1, flaps up = 4° pitch / 75% N1.",
          items: [
            { num: 1, name: "Autopilot (if engaged)", setting: "Disengage", critical: true },
            { num: 2, name: "Autothrottle (if engaged)", setting: "Disengage", critical: true },
            { num: 3, name: "F/D switches (both)", setting: "OFF", critical: true },
            { num: 4, name: "Set pitch attitude and thrust", setting: "", critical: true, subitems: [
              { name: "Flaps extended", setting: "10° pitch / 80% N1" },
              { name: "Flaps up", setting: "4° pitch / 75% N1" }
            ]}
          ],
          images: [],
          panelState: [],
          gotchas: [
            "Then refer to QRC for remaining items",
            "Critical numbers: Flaps extended = 10° pitch / 80% N1",
            "Critical numbers: Flaps up = 4° pitch / 75% N1",
            "Disconnect ALL automation first, then fly pitch and power"
          ],
          timing: "",
          aomRef: "QRC: Airspeed Unreliable",
          relatedFlashcards: ["Flight Instruments", "Autoflight"]
        },
        {
          id: "mem_runaway_stab",
          type: "flow",
          who: "CA/FO",
          title: "Runaway Stabilizer",
          trigger: "MEMORY ITEM — No reference material",
          description: "The longest memory item with critical branch logic. Control column FIRST — maintain aircraft control throughout. Key decision point: does the runaway stop after AP disconnect, or continue?",
          items: [
            { num: 1, name: "Control column", setting: "Hold firmly", critical: true },
            { num: 2, name: "Autopilot (if engaged)", setting: "Disengage", critical: true },
            { num: 3, name: "Autothrottle (if engaged)", setting: "Disengage", critical: true },
            { num: 4, name: "Control column and thrust levers", setting: "Control aircraft pitch attitude and airspeed", critical: true },
            { num: 5, name: "Main Electric Stabilizer trim", setting: "Reduce control column forces", critical: true },
            { num: 6, name: "If runaway STOPS after AP disengaged", setting: "Do not re-engage the autopilot or autothrottle", critical: true },
            { num: 7, name: "If runaway CONTINUES after AP disengaged", setting: "STAB TRIM cutout switches (both) — CUTOUT", critical: true },
            { num: 8, name: "If runaway CONTINUES", setting: "Stabilizer trim wheel — Grasp and hold", critical: true }
          ],
          images: [],
          panelState: [],
          gotchas: [
            "Branch logic: runaway STOPS after AP disconnect vs. CONTINUES",
            "If it stops: do NOT re-engage autopilot or autothrottle",
            "If it continues: STAB TRIM CUTOUT switches both to CUTOUT",
            "If it STILL continues: physically grasp and hold the trim wheel",
            "Control column FIRST — maintain aircraft control throughout"
          ],
          timing: "Practice daily until you can recite all 4 memory items in under 90 seconds total",
          aomRef: "QRC: Runaway Stabilizer",
          relatedFlashcards: ["Flight Controls", "Autoflight"]
        }
      ]
    },

    // ========================================================
    // PHASE 20 — SPECIAL TAKEOFFS (AOM Ch 6)
    // ========================================================
    {
      id: "special_takeoffs",
      number: 20,
      title: "Special Takeoffs",
      category: "takeoff",
      steps: [
        {
          id: "hud_low_vis_takeoff",
          type: "flow",
          who: "CA",
          title: "HUD Low Visibility Takeoff",
          trigger: "RVR less than 500 (150 m) on runway approved for 300 RVR (75 m) takeoff",
          description: "Required when visibility falls below 500 RVR on runways supported by 300 RVR takeoff. Captain flies the takeoff using HUD ground roll guidance to track centerline. FO stays on instruments throughout the roll and calls 'Centerline' if ground path diverges from the localizer.",
          items: [
            { num: 1, name: "MCP heading and courses", setting: "Set runway heading (Jeppesen airport diagram)", critical: true, subitems: [] },
            { num: 2, name: "CDU HUD MENU page", setting: "Set", critical: true, subitems: [
              { name: "Mode: NP (BAE2020) or PRI (HGS-4000/6000)", isNote: true },
              { name: "RWY LENGTH: verify (correct for intersection / TPS / NOTAM)", isNote: true },
              { name: "RWY ELEV: verify (TDZE or field elevation)", isNote: true },
              { name: "G/S ANGLE: verify", isNote: true }
            ]},
            { num: 3, name: "VHF NAV radios", setting: "Set ILS frequency (backcourse NOT authorized)", critical: true, subitems: [] },
            { num: 4, name: "LOC ident / course", setting: "Check — must receive valid LOC for ground roll guidance", critical: true, subitems: [] },
            { num: 5, name: "GND ROLL", setting: "ARMED (BAE2020) or GND ROLL CUE visible (HGS-4000/6000)", critical: true, subitems: [
              { name: "If NO GND ROLL displayed → takeoff is NOT authorized", isNote: true }
            ]},
            { num: 6, name: "Localizer symbol & course arrow", setting: "Approximately aligned with runway centerline", critical: false, subitems: [] },
            { num: 7, name: "Takeoff roll", setting: "Follow GND ROLL guidance, use rudder to keep localizer between landing gear", critical: true, subitems: [
              { name: "If GND ROLL not active by 60 kt (BAE2020) / cue not present at 40 kt (HGS) → REJECT", isNote: true }
            ]},
            { num: 8, name: "At VR", setting: "Rotate to put boresight in TO/GA line gap (10° pitch line)", critical: true, subitems: [
              { name: "Pitch above TO/GA line increases tailstrike risk", isNote: true }
            ]}
          ],
          images: [],
          panelState: [
            "HUD: GND ROLL armed / GND ROLL CUE visible",
            "MCP heading: runway heading",
            "MCP courses: runway heading",
            "VHF NAV 1 & 2: ILS frequency",
            "FDs: ON"
          ],
          gotchas: [
            "Static (not rolling) takeoff recommended — gets GND ROLL active sooner",
            "Backcourse localizer guidance for takeoff is NOT authorized",
            "Captain flies HUD; FO stays on instruments throughout takeoff roll",
            "FO 'Centerline' call only on definite divergence — not normal bracketing",
            "RWY REM is advisory only; do NOT base reject decision on it",
            "Below 20 kt the GPV is unreliable — don't taxi slowly down the runway",
            "Two of three transmissometers required (TDZ / Mid / Rollout) — all reporting are controlling"
          ],
          timing: "GND ROLL must be active by 60 kt (BAE2020) or cue present at 40 kt (HGS) — otherwise REJECT",
          aomRef: "AOM 6.3 HUD Low Visibility Takeoffs",
          relatedFlashcards: ["HUD/HGS", "Autoflight", "Flight Instruments"]
        },
        {
          id: "rejected_takeoff",
          type: "flow",
          who: "CA",
          title: "Rejected Takeoff (RTO)",
          trigger: "Captain decides to reject takeoff — must be initiated NLT V1",
          description: "Captain has sole authority to reject. The decision must be made prior to V1 so the maneuver is initiated no later than V1. Below 80 kt reject for almost anything. Between 80 kt and V1 the bar is much higher: fire/fire warning, engine failure, predictive windshear warning, or aircraft unsafe/unable to fly.",
          items: [
            { num: 1, name: "Captain calls", setting: "\"Reject, my aircraft.\" — assume control if FO was PF", critical: true, subitems: [] },
            { num: 2, name: "Thrust levers", setting: "CLOSE — without delay", critical: true, subitems: [] },
            { num: 3, name: "Autothrottle", setting: "DISENGAGE", critical: true, subitems: [] },
            { num: 4, name: "Wheel brakes", setting: "MAXIMUM manual or verify RTO autobrake operation", critical: true, subitems: [
              { name: "Below ~90 kt autobrake is NOT initiated and DISARM light does not illuminate", isNote: true }
            ]},
            { num: 5, name: "SPEEDBRAKE lever", setting: "Manually deploy (Captain) — FO calls \"Deployed\" or \"No Speedbrakes\"", critical: true, subitems: [
              { name: "If captain fails to deploy, FO manually deploys", isNote: true }
            ]},
            { num: 6, name: "Reverse thrust", setting: "Apply maximum consistent with conditions — FO calls \"Single reverse\" or \"No reverse\" if needed", critical: true, subitems: [] },
            { num: 7, name: "Maximum braking", setting: "Continue until certain aircraft can stop on runway", critical: true, subitems: [] },
            { num: 8, name: "FO callouts", setting: "\"80\", \"60\", and any omissions / autobrakes off", critical: false, subitems: [] },
            { num: 9, name: "Reverse thrust levers", setting: "Reverse idle detent before taxi speed, then full down after engines at reverse idle", critical: false, subitems: [] },
            { num: 10, name: "Notify tower / crew", setting: "Communicate reject and intentions ASAP", critical: false, subitems: [] },
            { num: 11, name: "When stopped — evaluate", setting: "Evacuation required → call Evacuation checklist. Otherwise PA: \"Remain seated, remain seated, remain seated\"", critical: true, subitems: [] }
          ],
          images: [],
          panelState: [
            "Thrust levers: closed",
            "Autothrottle: disengaged",
            "Speedbrake: UP (manually deployed)",
            "Reverse thrust: applied",
            "Brakes: max (manual or RTO autobrake)"
          ],
          gotchas: [
            "Below 80 kt: reject for master caution, system failure, unusual noise/vibration, tire failure, slow accel, T/O config warning, fire, engine failure, PWS caution/warning, unsafe to fly",
            "80 kt → V1: reject ONLY for fire, engine failure, PWS warning, or unsafe to fly",
            "Tire failure < 80 kt → REJECT. Tire failure > 80 kt → CONTINUE (braking effectiveness reduced)",
            "Flightdeck window opening above 80 kt → do NOT reject; close airborne or return",
            "Above V1: rejecting is NOT recommended unless aircraft incapable of flight",
            "Reverse thrust is NOT credited in reject performance data — supplemental only",
            "Heavy braking can blow tires, melt fuse plugs, damage flaps/gear/hydraulics — review brake cooling schedule",
            "Do NOT set parking brake unless evacuation needed (hot brake hazard)"
          ],
          timing: "Decision must be made prior to V1 — maneuver initiated NLT V1",
          aomRef: "AOM 6.4 Rejected Takeoff",
          relatedFlashcards: ["Brakes", "Engines", "Warning Systems"]
        },
        {
          id: "loss_of_thrust_v1",
          type: "flow",
          who: "PF",
          title: "Loss of Thrust at or Above V1",
          trigger: "Engine failure at or above V1",
          description: "Above V1 the takeoff is continued. Maintain directional control with rudder, rotate to 12-13° at VR (slower rate ≈1.5-2.5°/sec, rotation takes 10-12 sec engine out vs 6-7 sec all engines), climb at V2 to V2+20 with bank limited to 15° until V2+15, then accomplish the engine-out cleanup at acceleration height.",
          items: [
            { num: 1, name: "First pilot to recognize", setting: "Call \"Engine Failure\" — do NOT identify the engine", critical: true, subitems: [] },
            { num: 2, name: "Directional control", setting: "Rudder — stop the yaw (heading is best indicator of correct rudder)", critical: true, subitems: [] },
            { num: 3, name: "At VR", setting: "PM calls \"Rotate\" — PF rotates smoothly toward 12°-13° pitch", critical: true, subitems: [
              { name: "Rate ~1.5-2.5°/sec (slower than all-engine)", isNote: true },
              { name: "Rapid or over-rotation may cause tailstrike", isNote: true }
            ]},
            { num: 4, name: "After liftoff", setting: "Climb at V2 to V2+20, bank limited to 15° until V2+15", critical: true, subitems: [] },
            { num: 5, name: "Positive rate", setting: "PM calls \"Positive rate\" → PF \"Gear up\"", critical: true, subitems: [] },
            { num: 6, name: "Above 400 ft RA", setting: "Verify or call for appropriate roll mode (HDG or LNAV)", critical: false, subitems: [
              { name: "Fly extended runway centerline OR Engine-Out SID lateral path if published", isNote: true }
            ]},
            { num: 7, name: "At E/O acceleration altitude (TPS or ##-7E)", setting: "PF: \"VNAV\" (or \"LVL CHG, set speed\" if VNAV N/A)", critical: true, subitems: [
              { name: "Reduce pitch and accelerate, retract flaps on schedule", isNote: true }
            ]},
            { num: 8, name: "At flaps up maneuvering speed (UP bug)", setting: "PF: \"MCT, ____ checklist\" — PM selects MCT and accomplishes appropriate non-normal", critical: true, subitems: [] }
          ],
          images: [],
          panelState: [
            "Pitch: 12°-13° initial",
            "Speed: V2 to V2+20",
            "Bank: ≤15° until V2+15, then up to 30° at V2+15 with takeoff flaps",
            "Roll mode: HDG SEL or LNAV after 400 ft RA",
            "Thrust: takeoff (then MCT after cleanup)"
          ],
          gotchas: [
            "If engine fails between V1 and liftoff: maintain directional control with smooth rudder proportionate to thrust decay",
            "Centered control wheel ≈ in-trim — apply rudder in direction wheel is displaced",
            "Standard thrust takeoff: max thrust on remaining engine NOT required by performance, but available if desired",
            "EO SID is auto-selected as route mod if engine fails before flap retraction — may need to execute before 400 ft",
            "Obstacle clearance only assured along extended runway centerline OR published EO SID path",
            "MCT must be selected within 5 minutes of takeoff initiation",
            "Min flap retraction altitude with engine out: 1000 ft AGL or E/O ACCEL ALT on TPS",
            "Autopilot may be engaged at safe altitude above 400 ft RA with correct rudder/trim",
            "GPWS alerts may still occur on the engine-out path — terrain has been assessed but alerting thresholds may trigger"
          ],
          timing: "Engine-out rotation takes 10-12 seconds (vs 6-7 all engines)",
          aomRef: "AOM 6.5 Loss of Thrust at or Above V1",
          relatedFlashcards: ["Engines", "Autoflight", "Flight Controls"]
        }
      ]
    },

    // ========================================================
    // PHASE 21 — APPROACHES: ILS (AOM Ch 10)
    // ========================================================
    {
      id: "approaches_ils",
      number: 21,
      title: "Approaches — ILS",
      category: "approach",
      steps: [
        {
          id: "stabilized_approach",
          type: "callout",
          who: "PF/PM",
          title: "Stabilized Approach — Actions & Callouts",
          trigger: "Every approach — gate is 1000 ft AFL (IMC), may delay to 500 ft AFL (VMC)",
          description: "The single most important framework for any approach. Plan to be stable by 1000 ft AFL in both IMC and VMC. If unstable in IMC at 1000 ft, go around. In VMC, may delay compliance to 500 ft AFL as long as 'unstable' is called along with the deviation. Either pilot may direct a go-around.",
          calloutSequence: [
            { type: "milestone", text: "1000 feet AFL — Choose One" },

            { type: "milestone", text: "Stable" },
            { who: "PF", type: "callout", text: "\"Stable.\"" },

            { type: "milestone", text: "Unstable in IMC" },
            { who: "PF", type: "callout", text: "\"Unstable, go around.\"" },
            { who: "PF", type: "action", text: "Perform go-around" },

            { type: "milestone", text: "Unstable in VMC" },
            { who: "PF", type: "action", text: "Compliance with speed, flight path and/or thrust may be delayed until 500 ft AFL as long as \"unstable\" is called out along with the deviation (e.g., \"Unstable, half dot high.\")" },
            { who: "PF", type: "callout", text: "Otherwise: \"Unstable, go around.\"" },
            { who: "PF", type: "action", text: "Perform go-around" },

            { type: "milestone", text: "500 feet AFL — Choose One" },

            { type: "milestone", text: "Stable" },
            { who: "PM", type: "callout", text: "\"500.\" (auto callout)" },
            { who: "PF", type: "callout", text: "\"Stable, target, sink ___.\"  or  \"Stable, ± ___, sink ___.\"" },

            { type: "milestone", text: "Unstable" },
            { who: "PF", type: "callout", text: "\"Unstable, go around.\"" },
            { who: "PF", type: "action", text: "Perform go-around" }
          ],
          images: [],
          panelState: [
            "Configuration: gear down, landing flaps",
            "Speed: target -5 / +10 kt",
            "Flight path: on path",
            "Thrust: spooled / stabilized",
            "Sink rate: ≤1000 fpm inside FAF / below 1000 ft AFL"
          ],
          gotchas: [
            "Either pilot may direct a go-around — directed GA must be executed unless emergency overrides",
            "Deviation callouts: \"Airspeed\" (<target-5 or >target+10), \"Sink rate\", \"Localizer\" (≥1/3 dot or diamond touches box), \"Glideslope\" (≥1/2 dot), \"Path\", \"Track\", \"VOR\" (>1 dot)",
            "Decision to go around is good judgment, NOT poor performance",
            "Distance rule of thumb: 3 NM per 1000 ft (3:1)",
            "Decel rule of thumb: ~10 sec and 1 NM per 10 kt in level flight without speedbrakes",
            "Briefed deviations from stabilized criteria are allowed for non-normals or unique procedures"
          ],
          timing: "1000 ft AFL is the gate (delay to 500 ft AFL only in VMC and only when called out)",
          aomRef: "AOM 10.2 Stabilized Approach",
          relatedFlashcards: ["Approach", "Autoflight"]
        },
        {
          id: "ils_general",
          type: "flow",
          who: "PF/PM",
          title: "ILS General — Setup & Captures",
          trigger: "Any ILS approach — applies to CAT I, II, III, SA CAT I, SA CAT II",
          description: "Common setup applicable to every ILS. Set MCP altitude to MAA, set MINS reference (BARO for CAT I/SA CAT I, RADIO for CAT II/III), and watch for false LOC captures and below-glideslope APP arming pitfalls.",
          items: [
            { num: 1, name: "MCP altitude selector", setting: "MAA", critical: true, subitems: [
              { name: "Set MAA after G/S captured, NLT 1000 ft AFL", isNote: true }
            ]},
            { num: 2, name: "MINS reference selector", setting: "BARO (CAT I, SA CAT I) or RADIO (CAT II, CAT III)", critical: true, subitems: [
              { name: "DA for CAT I, DH for SA CAT I and CAT II/III", isNote: true }
            ]},
            { num: 3, name: "VHF NAV 1 and 2", setting: "Set ILS frequency", critical: true, subitems: [] },
            { num: 4, name: "MCP courses (both)", setting: "Set inbound", critical: true, subitems: [] },
            { num: 5, name: "Flight Directors", setting: "ON", critical: false, subitems: [] },
            { num: 6, name: "Watch for false LOC capture", setting: "Cross-reference ND MAP — if false, uncouple AFDS, HDG SEL to intercept, re-arm APP", critical: false, subitems: [] },
            { num: 7, name: "Glideslope capture", setting: "Inhibited until LOC captured", critical: false, subitems: [
              { name: "If APP armed below G/S not in altitude hold, aircraft may CLIMB to capture", isNote: true }
            ]}
          ],
          images: [],
          panelState: [
            "MCP altitude: MAA",
            "MINS selector: BARO (CAT I) / RADIO (CAT II-III)",
            "VHF NAV 1 & 2: ILS freq",
            "MCP courses: inbound (both)",
            "FDs: ON"
          ],
          gotchas: [
            "Engine-out ILS: do NOT use autothrottle. Trim for single engine before final. Intercept LOC at flaps 5 / flaps 5 speed; at ~1 dot G/S extend gear, flaps 15, set Vapp",
            "Engine-out ILS approved: FD/single AP/raw data → CAT I; HUD → SA CAT I/II/III",
            "Step-down constraints may NOT be assured following G/S outside the FAS",
            "False LOC captures: identify on ND, uncouple, HDG SEL to intercept, re-arm APP"
          ],
          timing: "MAA must be set NLT 1000 ft AFL after G/S captured",
          aomRef: "AOM 10.3 ILS General",
          relatedFlashcards: ["Approach", "Autoflight", "Navigation"]
        },
        {
          id: "ils_cat1",
          type: "callout",
          who: "PF/PM",
          title: "ILS CAT I",
          trigger: "Cleared for ILS approach — DA-based minimums",
          description: "Standard ILS approach to a barometric DA. AP recommended; required off NLT 50 ft AGL. With less than 4000 RVR or 3/4 mi visibility autobrakes are required and AP must be off (autopilot is not authorized below 50 ft AGL on standard CAT I). Crosswind limit drops to 15 kt below 4000 RVR. SA CAT I (HUD-equipped, CAT II qualified crew) gets DH as low as 150 ft and RVR 1400.",
          calloutSequence: [
            { type: "milestone", text: "Cleared for approach" },
            { who: "PF", type: "action", text: "Select/Request APP" },
            { who: "PF", type: "action", text: "If available, AIII must be used below RVR 1800. If AIII is not available, AII/IMC may be used down to RVR 1200." },
            { who: "PM", type: "action", text: "Arm APP, if requested" },

            { type: "milestone", text: "LOC capture" },
            { who: "PF", type: "action", text: "Verify VOR/LOC annunciates on FMA" },
            { who: "PM", type: "action", text: "Verify VOR/LOC annunciates on FMA" },
            { who: "PM", type: "callout", text: "\"LOC capture.\"" },

            { type: "milestone", text: "Approaching 1-dot G/S or NLT 2000 ft AFL (recommended)" },
            { who: "PF", type: "action", text: "Check airspeed" },
            { who: "PF", type: "callout", text: "\"Gear down.\"" },
            { who: "PF", type: "action", text: "Set/request speed" },
            { who: "PM", type: "action", text: "Check airspeed" },
            { who: "PM", type: "action", text: "Select gear down" },
            { who: "PM", type: "action", text: "Set speed, if requested" },
            { who: "PF", type: "action", text: "Check airspeed" },
            { who: "PF", type: "callout", text: "\"Flaps 15.\"" },
            { who: "PF", type: "action", text: "Arm SPEEDBRAKE" },
            { who: "PF", type: "action", text: "Set/request speed" },
            { who: "PM", type: "action", text: "Check airspeed" },
            { who: "PM", type: "callout", text: "\"Speed verified.\"" },
            { who: "PM", type: "action", text: "Select flaps 15" },
            { who: "PM", type: "action", text: "Set speed, if requested" },

            { type: "milestone", text: "G/S capture" },
            { who: "PF", type: "callout", text: "\"Glideslope capture. Set missed approach altitude.\"" },
            { who: "PF", type: "action", text: "Set/request missed approach altitude on MCP" },
            { who: "PM", type: "action", text: "Set missed approach altitude on MCP, if requested" },

            { type: "milestone", text: "Final approach verification altitude fix" },
            { who: "PF", type: "action", text: "Verify Final Approach Verification Altitude" },
            { who: "PM", type: "action", text: "Verify Final Approach Verification Altitude" },

            { type: "milestone", text: "Prior to 1000 feet AFL (2 ENG)" },
            { who: "PF", type: "action", text: "Check airspeed" },
            { who: "PF", type: "callout", text: "\"Flaps ___, below the line.\"" },
            { who: "PF", type: "action", text: "Set/request speed" },
            { who: "PM", type: "action", text: "Check airspeed" },
            { who: "PM", type: "callout", text: "\"Speed verified.\"" },
            { who: "PM", type: "action", text: "Select requested flaps, set speed if requested" },
            { who: "PM", type: "action", text: "Complete Before Landing Checklist (below the line)" },
            { who: "PF", type: "action", text: "Visually confirm all tabs on the mechanical checklist are closed out" },
            { who: "PM", type: "action", text: "Visually confirm all tabs on the mechanical checklist are closed out" },

            { type: "milestone", text: "Prior to 1000 feet AFL (1 ENG)" },
            { who: "PF", type: "action", text: "Maintain flaps 15" },
            { who: "PF", type: "callout", text: "\"Below the line.\"" },
            { who: "PM", type: "action", text: "Complete Before Landing Checklist (below the line)" },
            { who: "PF", type: "action", text: "Visually confirm all tabs on the mechanical checklist are closed out" },
            { who: "PM", type: "action", text: "Visually confirm all tabs on the mechanical checklist are closed out" },

            { type: "milestone", text: "1000 feet AFL" },
            { who: "PM", type: "callout", text: "\"1000.\" (auto callout)" },
            { who: "PF", type: "action", text: "Verify altitude" },
            { who: "PF", type: "callout", text: "\"Stable.\"" },

            { type: "milestone", text: "500 feet AFL" },
            { who: "PF", type: "action", text: "Verify altitude, speed, and sink rate" },
            { who: "PM", type: "callout", text: "\"500.\" (auto callout)" },
            { who: "PF", type: "callout", text: "\"Stable, target, sink ___.\"  or  \"Stable, ± ___, sink ___.\"" },

            { type: "milestone", text: "100 feet above DA(H)" },
            { who: "PM", type: "callout", text: "\"Plus hundred.\" (auto callout)" },
            { who: "PF", type: "action", text: "Verify altitude" },
            { who: "PF", type: "action", text: "Divide time between monitoring instruments and scanning outside for runway environment" },

            { type: "milestone", text: "At DA(H) — Choose One" },
            { who: "PM", type: "callout", text: "\"Minimums.\" (auto callout)" },

            { type: "milestone", text: "Approach lights and runway environment NOT in sight" },
            { who: "PF", type: "callout", text: "\"No contact.\"" },
            { who: "PF", type: "action", text: "Execute go-around maneuver" },
            { who: "PM", type: "action", text: "Monitor go-around and perform PM duties" },

            { type: "milestone", text: "Only approach lights in sight" },
            { who: "PF", type: "callout", text: "\"Approach lights.\"" },

            { type: "milestone", text: "Runway environment in sight" },
            { who: "PF", type: "callout", text: "\"Runway.\"" },
            { who: "PF", type: "callout", text: "\"Continuing.\"" },
            { who: "PF", type: "action", text: "Disengage autopilot no later than 50 feet AGL and maintain stabilized approach to touchdown" },

            { type: "milestone", text: "Touchdown" },
            { who: "PF", type: "action", text: "Verify the thrust levers are closed (CAUTION: low energy state with thrust at idle can cause hard landing or tailstrike)" },
            { who: "PF", type: "action", text: "Verify SPEEDBRAKE lever is FULL UP" },
            { who: "PM", type: "action", text: "Verify SPEEDBRAKE lever is FULL UP" },
            { who: "PM", type: "callout", text: "\"Deployed.\"" },
            { who: "PM", type: "callout", text: "If speedbrakes do NOT deploy or fail to remain deployed: \"No speedbrakes.\"" },
            { who: "PF", type: "action", text: "Captain: Manually deploy SPEEDBRAKE lever" },
            { who: "PM", type: "action", text: "First Officer: If captain fails to deploy speedbrakes, manually deploy SPEEDBRAKE lever" },
            { who: "PF", type: "action", text: "Monitor autobrakes, if selected" },
            { who: "PM", type: "action", text: "Monitor autobrakes, if selected" },
            { who: "PF", type: "action", text: "Raise reverse thrust levers to the interlocks, hold light pressure until release" },
            { who: "PF", type: "action", text: "Apply reverse thrust as needed (WARNING: After reverse thrust has been initiated, a full stop landing must be made)" },
            { who: "PM", type: "callout", text: "If no REV indication or stays amber: \"Single reverse.\" or \"No reverse.\"" },
            { who: "PF", type: "action", text: "If either engine fails to enter reverse, use caution applying reverse on remaining engine" },

            { type: "milestone", text: "80 knots" },
            { who: "PM", type: "callout", text: "\"80.\"" },

            { type: "milestone", text: "By 60 knots" },
            { who: "PF", type: "action", text: "Reduce reverse thrust to be at IDLE reverse when reaching taxi speed" },

            { type: "milestone", text: "60 knots" },
            { who: "PM", type: "callout", text: "\"60.\"" },

            { type: "milestone", text: "Approaching taxi speed" },
            { who: "PF", type: "action", text: "After engines are at reverse idle, move the reverse thrust levers full down" },
            { who: "PF", type: "action", text: "Transition to Manual Braking" },
            { who: "PF", type: "callout", text: "When applying manual braking: \"Manual braking.\"" },
            { who: "PF", type: "callout", text: "If the AUTO BRAKE DISARM light illuminates: \"Autobrakes off.\"" },
            { who: "PM", type: "action", text: "Verify REV indication extinguished" },
            { who: "PM", type: "action", text: "Call out any inadvertent selection of forward thrust as reverse thrust is canceled" },

            { type: "milestone", text: "FO landing — Captain assumes control for taxi" },
            { who: "PF", type: "callout", text: "Captain: \"My aircraft.\"" },
            { who: "PM", type: "callout", text: "First Officer: \"Your aircraft.\"" }
          ],
          images: [],
          panelState: [
            "MCP: APP armed → LOC/GS captured → MAA set after GS capture",
            "Gear: down by ~2000 ft AFL",
            "Flaps: 15 → landing flaps prior to 1000 ft AFL",
            "Speedbrake: ARMED",
            "MINS: BARO DA",
            "AP: off NLT 50 ft AGL"
          ],
          gotchas: [
            "Less than 4000 RVR or 3/4 mi: autobrakes REQUIRED (if operative), AP must be OFF, crosswind max 15 kt",
            "Tailwind max: 10 kt",
            "Category D minimums",
            "Go around prior to DA: any required equipment fails",
            "Go around at DA: visual reference requirements not met",
            "Go around below DA: visual reference loss preventing safe continuation, OR cannot land safely in TDZ",
            "Anytime: LOC or G/S full deflection (≥2.5 dots, magenta diamond hollow)",
            "SA CAT I requires HUD in AIII (or AII/IMC), CA flies, CAT II crew currency, 15 kt crosswind max, DH as low as 150 ft / RVR 1400"
          ],
          timing: "AP off NLT 50 ft AGL on standard CAT I",
          aomRef: "AOM 10.4 ILS CAT I",
          relatedFlashcards: ["Approach", "Autoflight", "Brakes"]
        },
        {
          id: "ils_cat2_cat3",
          type: "callout",
          who: "CA/FO",
          title: "ILS SA CAT II & CAT II/III",
          trigger: "Cleared for CAT II or CAT III ILS — RA-based DH (Captain is PF)",
          description: "Captain assumes PF duties. Approach must be flown using HUD to touchdown. Actions and callouts are identical for CAT II and CAT III down to DH. AP is disconnected NLT 1000 ft AFL. AIII required below RVR 1800 (AII/IMC may be used down to RVR 1200 if AIII unavailable). Must have a usable LOC inside the runway threshold.",
          calloutSequence: [
            { type: "milestone", text: "Cleared for approach (Captain = PF)" },
            { who: "PF", type: "action", text: "Select/Request APP" },
            { who: "PF", type: "action", text: "If available, AIII must be used below RVR 1800. If AIII not available, AII/IMC may be used down to RVR 1200." },
            { who: "PM", type: "action", text: "Arm APP, if requested" },

            { type: "milestone", text: "LOC capture" },
            { who: "PF", type: "action", text: "Verify VOR/LOC annunciated on FMA" },
            { who: "PM", type: "action", text: "Verify VOR/LOC annunciated on FMA" },
            { who: "PM", type: "callout", text: "\"LOC capture.\"" },

            { type: "milestone", text: "Approaching 1-dot G/S or NLT 2000 ft AFL (recommended)" },
            { who: "PF", type: "action", text: "Check airspeed" },
            { who: "PF", type: "callout", text: "\"Gear down.\"" },
            { who: "PF", type: "action", text: "Set/request speed" },
            { who: "PM", type: "action", text: "Check airspeed" },
            { who: "PM", type: "action", text: "Select gear down" },
            { who: "PM", type: "action", text: "Set speed, if requested" },
            { who: "PF", type: "action", text: "Check airspeed" },
            { who: "PF", type: "callout", text: "\"Flaps 15.\"" },
            { who: "PF", type: "action", text: "Arm SPEEDBRAKE" },
            { who: "PF", type: "action", text: "Set/request speed" },
            { who: "PM", type: "action", text: "Check airspeed" },
            { who: "PM", type: "callout", text: "\"Speed verified.\"" },
            { who: "PM", type: "action", text: "Select flaps 15, set speed if requested" },

            { type: "milestone", text: "G/S capture" },
            { who: "PF", type: "callout", text: "\"Glideslope capture. Set missed approach altitude.\"" },
            { who: "PF", type: "action", text: "Set/request missed approach altitude on MCP" },
            { who: "PM", type: "action", text: "Set missed approach altitude on MCP, if requested" },

            { type: "milestone", text: "Final approach verification altitude fix" },
            { who: "PF", type: "action", text: "Verify Final Approach Verification Altitude" },
            { who: "PF", type: "action", text: "Extend flaps, as desired" },
            { who: "PM", type: "action", text: "Verify Final Approach Verification Altitude" },
            { who: "PM", type: "action", text: "Monitor HUD Annunciator Panel on final approach segment for amber/red caution or warning while IMC" },
            { who: "PM", type: "action", text: "Remain on instruments throughout approach and roll out" },
            { who: "PM", type: "callout", text: "\"Go around.\" — anytime amber/red caution/warning annunciates on HUD AP on final segment while IMC" },

            { type: "milestone", text: "Prior to 1000 feet AFL (2 ENG)" },
            { who: "PF", type: "action", text: "Check airspeed" },
            { who: "PF", type: "callout", text: "\"Flaps ___, below the line.\"" },
            { who: "PF", type: "action", text: "Set/request speed" },
            { who: "PM", type: "action", text: "Check airspeed" },
            { who: "PM", type: "callout", text: "\"Speed verified.\"" },
            { who: "PM", type: "action", text: "Select requested flaps, set speed if requested" },
            { who: "PM", type: "action", text: "Complete Before Landing Checklist (below the line)" },
            { who: "PF", type: "action", text: "Visually confirm all tabs on the mechanical checklist are closed out" },
            { who: "PM", type: "action", text: "Visually confirm all tabs on the mechanical checklist are closed out" },

            { type: "milestone", text: "Prior to 1000 feet AFL (1 ENG)" },
            { who: "PF", type: "action", text: "Maintain flaps 15" },
            { who: "PF", type: "callout", text: "\"Below the line.\"" },
            { who: "PM", type: "action", text: "Complete Before Landing Checklist (below the line)" },
            { who: "PF", type: "action", text: "Visually confirm all tabs on the mechanical checklist are closed out" },
            { who: "PM", type: "action", text: "Visually confirm all tabs on the mechanical checklist are closed out" },

            { type: "milestone", text: "1000 feet AFL" },
            { who: "PM", type: "callout", text: "\"1000.\" (auto callout)" },
            { who: "PF", type: "action", text: "Disconnect autopilot" },
            { who: "PF", type: "action", text: "Verify altitude" },
            { who: "PF", type: "callout", text: "\"Stable.\"" },

            { type: "milestone", text: "500 feet AFL" },
            { who: "PF", type: "action", text: "Verify altitude, speed, and sink rate" },
            { who: "PF", type: "action", text: "BAE2020: Verify AIII/AII active and FLARE armed" },
            { who: "PF", type: "action", text: "HGS-4000/6000: Verify AIII/IMC active and RO armed (AIII only)" },
            { who: "PM", type: "callout", text: "\"500.\" (auto callout)" },
            { who: "PF", type: "callout", text: "\"Stable, target, sink ___.\"  or  \"Stable, ± ___, sink ___.\"" },
            { who: "PF", type: "callout", text: "\"Continuing.\"" },

            { type: "milestone", text: "100 feet above DA(H)" },
            { who: "PM", type: "callout", text: "\"Plus hundred.\" (auto callout)" },

            { type: "milestone", text: "At DA(H) — Choose One" },
            { who: "PM", type: "callout", text: "\"Minimums.\" (auto callout)" },

            { type: "milestone", text: "DH — runway environment NOT in sight" },
            { who: "PF", type: "action", text: "Execute go-around maneuver" },
            { who: "PM", type: "action", text: "Monitor go-around and perform PM duties" },

            { type: "milestone", text: "DH — runway environment in sight" },
            { who: "PF", type: "action", text: "Maintain stabilized approach to touchdown" },

            { type: "milestone", text: "Roll out" },
            { who: "PF", type: "action", text: "Monitor runway centerline lights to assure runway alignment" },
            { who: "PM", type: "callout", text: "\"Centerline.\" — if aircraft is NOT tracking the localizer" },

            { type: "milestone", text: "Touchdown" },
            { who: "PF", type: "action", text: "Verify the thrust levers are closed (CAUTION: low energy state with thrust at idle can cause hard landing or tailstrike)" },
            { who: "PF", type: "action", text: "Verify SPEEDBRAKE lever is FULL UP" },
            { who: "PM", type: "action", text: "Verify SPEEDBRAKE lever is FULL UP" },
            { who: "PM", type: "callout", text: "\"Deployed.\"" },
            { who: "PM", type: "callout", text: "If speedbrakes do NOT deploy or fail to remain deployed: \"No speedbrakes.\"" },
            { who: "PF", type: "action", text: "If speedbrakes did not deploy: manually deploy SPEEDBRAKE lever" },
            { who: "PF", type: "action", text: "Monitor autobrakes, if selected" },
            { who: "PM", type: "action", text: "Monitor autobrakes, if selected" },
            { who: "PF", type: "action", text: "Raise reverse thrust levers to the interlocks, hold light pressure until release" },
            { who: "PF", type: "action", text: "Apply reverse thrust as needed (WARNING: After reverse thrust has been initiated, a full stop landing must be made)" },
            { who: "PM", type: "callout", text: "If no REV indication or stays amber: \"Single reverse.\" or \"No reverse.\"" },
            { who: "PF", type: "action", text: "If either engine fails to enter reverse, use caution applying reverse on remaining engine" },

            { type: "milestone", text: "80 knots" },
            { who: "PM", type: "callout", text: "\"80.\"" },

            { type: "milestone", text: "By 60 knots" },
            { who: "PF", type: "action", text: "Reduce reverse thrust to be at IDLE reverse when reaching taxi speed" },

            { type: "milestone", text: "60 knots" },
            { who: "PM", type: "callout", text: "\"60.\"" },

            { type: "milestone", text: "Approaching taxi speed" },
            { who: "PF", type: "action", text: "After engines are at reverse idle, move the reverse thrust levers full down" },
            { who: "PF", type: "action", text: "Transition to Manual Braking" },
            { who: "PF", type: "callout", text: "When applying manual braking: \"Manual braking.\"" },
            { who: "PF", type: "callout", text: "If the AUTO BRAKE DISARM light illuminates: \"Autobrakes off.\"" },
            { who: "PM", type: "action", text: "Verify REV indication extinguished" },
            { who: "PM", type: "action", text: "Call out any inadvertent selection of forward thrust as reverse thrust is canceled" }
          ],
          images: [],
          panelState: [
            "HUD: AIII (or AII/IMC)",
            "MINS: RADIO DH (50 ft for CAT III)",
            "AP: DISCONNECTED NLT 1000 ft AFL",
            "FLARE armed by 500 ft AFL (BAE2020)",
            "RO armed by 500 ft AFL (HGS-4000/6000, AIII only)"
          ],
          gotchas: [
            "Captain must fly the approach",
            "HUD required to touchdown",
            "AP disconnected NLT 1000 ft AFL — different from CAT I",
            "Headwind max 25 kt, tailwind max 10 kt, crosswind max 15 kt",
            "Autobrakes required (if operative) below 4000 RVR / 3/4 mi",
            "Must have usable LOC inside runway threshold (CAT II/III runways)",
            "Any HUD/HAP amber or red caution or warning on the FAS while IMC = mandatory go-around",
            "LOC or G/S full deflection (≥2.5 dots, hollow diamond) anytime = go-around",
            "Captain determines TDZ landing impossible = go-around"
          ],
          timing: "AP disconnect NLT 1000 ft AFL; FLARE/RO armed by 500 ft AFL",
          aomRef: "AOM 10.5 ILS CAT II/III",
          relatedFlashcards: ["Approach", "HUD/HGS", "Autoflight"]
        }
      ]
    },

    // ========================================================
    // PHASE 22 — APPROACHES: NON-ILS / VISUAL / CIRCLING (AOM Ch 10)
    // ========================================================
    {
      id: "approaches_non_ils",
      number: 22,
      title: "Approaches — Non-ILS, Visual, Circling",
      category: "approach",
      steps: [
        {
          id: "non_ils_approach",
          type: "callout",
          who: "PF/PM",
          title: "Non-ILS Approach (RNAV/RNP, LNAV/VNAV, LOC, VOR, NDB)",
          trigger: "Cleared for non-ILS instrument approach",
          description: "Covers RNAV(GPS), RNAV(RNP)/RNP(AR), LNAV/VNAV, LOC, VOR and NDB approaches. AP is required when ceiling <1000 ft AGL and/or vis <3 SM (1000-3), and for all RNP(AR) below RNP 0.3. VNAV PTH descent to DA, or V/S to DDA.",
          calloutSequence: [
            { type: "milestone", text: "Cleared for approach" },
            { who: "PF", type: "action", text: "Verify, select, or request LNAV (or appropriate roll mode)" },
            { who: "PF", type: "action", text: "Verify, select, or request VNAV (verify VNAV PTH in FMA)" },
            { who: "PF", type: "action", text: "Request or set minimums on the MCP (if conditions permit)" },
            { who: "PM", type: "action", text: "Select LNAV if requested" },
            { who: "PM", type: "action", text: "Select VNAV if requested" },
            { who: "PM", type: "action", text: "Set minimums on MCP if requested" },

            { type: "milestone", text: "Approaching FAF / GP INTCPT" },
            { who: "PF", type: "action", text: "Verify VNAV PTH, VNAV ALT or ALT HLD (FAF/GP INTCPT must be active waypoint)" },
            { who: "PF", type: "action", text: "Check airspeed" },
            { who: "PF", type: "callout", text: "\"Gear down.\"" },
            { who: "PF", type: "action", text: "Verify, select or request speed" },
            { who: "PM", type: "action", text: "Check airspeed" },
            { who: "PM", type: "action", text: "Select gear down" },
            { who: "PM", type: "action", text: "Set speed, if requested" },
            { who: "PF", type: "action", text: "Check airspeed" },
            { who: "PF", type: "callout", text: "\"Flaps 15.\"" },
            { who: "PF", type: "action", text: "Arm SPEEDBRAKE" },
            { who: "PF", type: "action", text: "Verify, select or request speed" },
            { who: "PM", type: "action", text: "Check airspeed" },
            { who: "PM", type: "callout", text: "\"Speed verified.\"" },
            { who: "PM", type: "action", text: "Select flaps 15, set speed if requested" },
            { who: "PF", type: "action", text: "Verify, select, or request VNAV — verify VNAV PTH on FMA (if applicable)" },
            { who: "PM", type: "action", text: "Select VNAV if requested — verify VNAV PTH on FMA (if applicable)" },

            { type: "milestone", text: "Passing FAF / GP INTCPT" },
            { who: "PF", type: "action", text: "Crosscheck altimeters ±100 feet" },
            { who: "PF", type: "action", text: "Verify Final Approach Verification Altitude" },
            { who: "PM", type: "action", text: "Crosscheck altimeters ±100 feet" },
            { who: "PM", type: "action", text: "Verify Final Approach Verification Altitude" },
            { who: "PF", type: "action", text: "Descend to Minimums — VNAV PTH (if applicable) → DA/DDA, or V/S → DDA" },

            { type: "milestone", text: "More than 300 feet below missed approach altitude" },
            { who: "PF", type: "callout", text: "\"Set missed approach altitude.\"" },
            { who: "PF", type: "action", text: "Set/request missed approach altitude on MCP" },
            { who: "PM", type: "action", text: "Set missed approach altitude on MCP, if requested" },

            { type: "milestone", text: "Prior to 1000 feet AFL (2 ENG)" },
            { who: "PF", type: "action", text: "Check airspeed" },
            { who: "PF", type: "callout", text: "\"Flaps ___, below the line.\"" },
            { who: "PF", type: "action", text: "Verify, select, or request speed" },
            { who: "PM", type: "action", text: "Check airspeed" },
            { who: "PM", type: "callout", text: "\"Speed verified.\"" },
            { who: "PM", type: "action", text: "Select requested flaps, set speed if requested" },
            { who: "PM", type: "action", text: "Complete Before Landing Checklist (below the line)" },
            { who: "PF", type: "action", text: "Visually confirm all tabs on the mechanical checklist are closed out" },
            { who: "PM", type: "action", text: "Visually confirm all tabs on the mechanical checklist are closed out" },

            { type: "milestone", text: "Prior to 1000 feet AFL (1 ENG)" },
            { who: "PF", type: "action", text: "Maintain flaps 15" },
            { who: "PF", type: "callout", text: "\"Below the line.\"" },
            { who: "PM", type: "action", text: "Complete Before Landing Checklist (below the line)" },

            { type: "milestone", text: "1000 feet AFL" },
            { who: "PM", type: "callout", text: "\"1000.\" (auto callout)" },
            { who: "PF", type: "action", text: "Verify altitude" },
            { who: "PF", type: "callout", text: "\"Stable.\"" },

            { type: "milestone", text: "500 feet AFL" },
            { who: "PF", type: "action", text: "Verify altitude, speed, and sink rate" },
            { who: "PM", type: "callout", text: "\"500.\" (auto callout)" },
            { who: "PF", type: "callout", text: "\"Stable, target, sink ___.\"  or  \"Stable, ± ___, sink ___.\"" },

            { type: "milestone", text: "100 feet above DA or DDA" },
            { who: "PM", type: "callout", text: "\"Plus hundred.\" (auto callout)" },
            { who: "PF", type: "action", text: "Divide time between monitoring instruments and scanning outside for runway environment" },

            { type: "milestone", text: "At DA or DDA — Choose One" },
            { who: "PM", type: "callout", text: "\"Minimums.\" (auto callout)" },

            { type: "milestone", text: "Approach lights and runway environment NOT in sight" },
            { who: "PF", type: "callout", text: "\"No contact.\"" },
            { who: "PF", type: "action", text: "Execute go-around maneuver" },
            { who: "PM", type: "action", text: "Monitor go-around and perform PM duties" },

            { type: "milestone", text: "Only approach lights in sight" },
            { who: "PF", type: "callout", text: "\"Approach lights.\"" },

            { type: "milestone", text: "Runway environment in sight" },
            { who: "PF", type: "callout", text: "\"Runway.\"" },
            { who: "PF", type: "callout", text: "\"Continuing.\"" },
            { who: "PF", type: "action", text: "Maintain stabilized approach to touchdown" },

            { type: "milestone", text: "Touchdown" },
            { who: "PF", type: "action", text: "Verify the thrust levers are closed (CAUTION: low energy state with thrust at idle can cause hard landing or tailstrike)" },
            { who: "PF", type: "action", text: "Verify SPEEDBRAKE lever is FULL UP" },
            { who: "PM", type: "action", text: "Verify SPEEDBRAKE lever is FULL UP" },
            { who: "PM", type: "callout", text: "\"Deployed.\"" },
            { who: "PM", type: "callout", text: "If speedbrakes do NOT deploy or fail to remain deployed: \"No speedbrakes.\"" },
            { who: "PF", type: "action", text: "Captain: Manually deploy SPEEDBRAKE lever" },
            { who: "PM", type: "action", text: "First Officer: If captain fails to deploy speedbrakes, manually deploy SPEEDBRAKE lever" },
            { who: "PF", type: "action", text: "Monitor autobrakes, if selected" },
            { who: "PM", type: "action", text: "Monitor autobrakes, if selected" },
            { who: "PF", type: "action", text: "Raise reverse thrust levers to the interlocks, hold light pressure until release" },
            { who: "PF", type: "action", text: "Apply reverse thrust as needed (WARNING: After reverse thrust has been initiated, a full stop landing must be made)" },
            { who: "PM", type: "callout", text: "If no REV indication or stays amber: \"Single reverse.\" or \"No reverse.\"" },
            { who: "PF", type: "action", text: "If either engine fails to enter reverse, use caution applying reverse on remaining engine" },

            { type: "milestone", text: "80 knots" },
            { who: "PM", type: "callout", text: "\"80.\"" },

            { type: "milestone", text: "By 60 knots" },
            { who: "PF", type: "action", text: "Reduce reverse thrust to be at IDLE reverse when reaching taxi speed" },

            { type: "milestone", text: "60 knots" },
            { who: "PM", type: "callout", text: "\"60.\"" },

            { type: "milestone", text: "Approaching taxi speed" },
            { who: "PF", type: "action", text: "After engines are at reverse idle, move the reverse thrust levers full down" },
            { who: "PF", type: "action", text: "Transition to Manual Braking" },
            { who: "PF", type: "callout", text: "When applying manual braking: \"Manual braking.\"" },
            { who: "PF", type: "callout", text: "If the AUTO BRAKE DISARM light illuminates: \"Autobrakes off.\"" },
            { who: "PM", type: "action", text: "Verify REV indication extinguished" },
            { who: "PM", type: "action", text: "Call out any inadvertent selection of forward thrust as reverse thrust is canceled" },

            { type: "milestone", text: "FO landing — Captain assumes control for taxi" },
            { who: "PF", type: "callout", text: "Captain: \"My aircraft.\"" },
            { who: "PM", type: "callout", text: "First Officer: \"Your aircraft.\"" }
          ],
          images: [],
          panelState: [
            "Roll: LNAV (or appropriate)",
            "Pitch: VNAV PTH → VNAV ALT/ALT HLD at minimums",
            "Gear: down by FAF",
            "Flaps: 15 → landing flaps prior to 1000 ft AFL",
            "MINS: BARO DA or DDA"
          ],
          gotchas: [
            "AP REQUIRED with ceiling <1000 ft AGL and/or vis <3 SM, AND on all RNP(AR) below RNP 0.3",
            "RNAV(RNP)/RNP(AR) NOT authorized outside BARO-VNAV temperature limits — RNAV(GPS)/RNP fall back to LNAV DDA",
            "GPS RAIM prediction required in IMC for RNP <0.3",
            "Min RNAV(RNP)/RNP(AR) authorized: 0.1",
            "Tailwind max 10 kt; below 4000 RVR / 3/4 mi: crosswind max 15 kt, autobrakes required",
            "Non-ILS deviation callouts: \"Path\" (vertical), \"Track\" (cross-track), \"VOR\" (>1 dot bearing)",
            "Use \"Track\" for VOR/LOC flown in LNAV",
            "VNAV descent to DA: at DA begin climb immediately and continue along final approach to MAP — do NOT initiate published miss before MAP"
          ],
          timing: "Plus hundred / Minimums callouts apply to DA or DDA",
          aomRef: "AOM 10.6 Non-ILS",
          relatedFlashcards: ["Approach", "Autoflight", "Navigation"]
        },
        {
          id: "visual_approach",
          type: "callout",
          who: "PF/PM",
          title: "Visual Approach — Actions & Callouts",
          trigger: "Cleared for visual approach (or RNAV Visual / FMS-CVFP Visual)",
          description: "2.5°-3° final approach path. Configuration is fixed by the time you're on final — only small adjustments to glide path, speed, and trim. ~300 ft per NM gives a normal profile. Stable on speed by ~500 ft above touchdown. Flaps are NOT used as drag — speedbrakes first, then early gear extension if needed. Note: 'Initial Approach' procedure (downwind/base setup) is in the AOM 10.7.3 Pattern Setup narrative — see Gotchas.",
          calloutSequence: [
            { type: "milestone", text: "Base leg (2 ENG)" },
            { who: "PF", type: "action", text: "Check airspeed" },
            { who: "PF", type: "callout", text: "\"Flaps ___, below the line.\"" },
            { who: "PF", type: "action", text: "Set/request speed" },
            { who: "PM", type: "action", text: "Check airspeed" },
            { who: "PM", type: "callout", text: "\"Speed verified.\"" },
            { who: "PM", type: "action", text: "Select requested flaps, set speed if requested" },
            { who: "PM", type: "action", text: "Complete Before Landing Checklist (below the line)" },
            { who: "PF", type: "action", text: "Visually confirm all tabs on the mechanical checklist are closed out" },
            { who: "PM", type: "action", text: "Visually confirm all tabs on the mechanical checklist are closed out" },

            { type: "milestone", text: "Base leg (1 ENG)" },
            { who: "PF", type: "action", text: "Maintain flaps 15" },
            { who: "PF", type: "callout", text: "\"Below the line.\"" },
            { who: "PM", type: "action", text: "Complete Before Landing Checklist (below the line)" },
            { who: "PF", type: "action", text: "Visually confirm all tabs on the mechanical checklist are closed out" },
            { who: "PM", type: "action", text: "Visually confirm all tabs on the mechanical checklist are closed out" },

            { type: "milestone", text: "1000 feet AFL" },
            { who: "PM", type: "callout", text: "\"1000.\" (auto callout)" },
            { who: "PF", type: "action", text: "Verify altitude" },
            { who: "PF", type: "callout", text: "\"Stable.\"" },

            { type: "milestone", text: "500 feet AFL" },
            { who: "PF", type: "action", text: "Verify altitude, speed, and sink rate" },
            { who: "PM", type: "callout", text: "\"500.\" (auto callout)" },
            { who: "PF", type: "callout", text: "\"Stable, target, sink ___.\"  or  \"Stable, ± ___, sink ___.\"" },
            { who: "PF", type: "action", text: "Maintain stabilized approach to touchdown" },

            { type: "milestone", text: "Touchdown" },
            { who: "PF", type: "action", text: "Verify the thrust levers are closed (CAUTION: low energy state with thrust at idle can cause hard landing or tailstrike)" },
            { who: "PF", type: "action", text: "Verify SPEEDBRAKE lever is FULL UP" },
            { who: "PM", type: "action", text: "Verify SPEEDBRAKE lever is FULL UP" },
            { who: "PM", type: "callout", text: "\"Deployed.\"" },
            { who: "PM", type: "callout", text: "If speedbrakes do NOT deploy or fail to remain deployed: \"No speedbrakes.\"" },
            { who: "PF", type: "action", text: "Captain: Manually deploy SPEEDBRAKE lever" },
            { who: "PM", type: "action", text: "First Officer: If captain fails to deploy speedbrakes, manually deploy SPEEDBRAKE lever" },
            { who: "PF", type: "action", text: "Monitor autobrakes, if selected" },
            { who: "PM", type: "action", text: "Monitor autobrakes, if selected" },
            { who: "PF", type: "action", text: "Raise reverse thrust levers to the interlocks, hold light pressure until release" },
            { who: "PF", type: "action", text: "Apply reverse thrust as needed (WARNING: After reverse thrust has been initiated, a full stop landing must be made)" },
            { who: "PM", type: "callout", text: "If no REV indication or stays amber: \"Single reverse.\" or \"No reverse.\"" },
            { who: "PF", type: "action", text: "If either engine fails to enter reverse, use caution applying reverse on remaining engine" },

            { type: "milestone", text: "80 knots" },
            { who: "PM", type: "callout", text: "\"80.\"" },

            { type: "milestone", text: "By 60 knots" },
            { who: "PF", type: "action", text: "Reduce reverse thrust to be at IDLE reverse when reaching taxi speed" },

            { type: "milestone", text: "60 knots" },
            { who: "PM", type: "callout", text: "\"60.\"" },

            { type: "milestone", text: "Approaching taxi speed" },
            { who: "PF", type: "action", text: "After engines are at reverse idle, move the reverse thrust levers full down" },
            { who: "PF", type: "action", text: "Transition to Manual Braking" },
            { who: "PF", type: "callout", text: "When applying manual braking: \"Manual braking.\"" },
            { who: "PF", type: "callout", text: "If the AUTO BRAKE DISARM light illuminates: \"Autobrakes off.\"" },
            { who: "PM", type: "action", text: "Verify REV indication extinguished" },
            { who: "PM", type: "action", text: "Call out any inadvertent selection of forward thrust as reverse thrust is canceled" },

            { type: "milestone", text: "FO landing — Captain assumes control for taxi" },
            { who: "PF", type: "callout", text: "Captain: \"My aircraft.\"" },
            { who: "PM", type: "callout", text: "First Officer: \"Your aircraft.\"" }
          ],
          images: [],
          panelState: [
            "Downwind: flaps 5, 1500 ft AFL, 2 NM abeam",
            "Base: gear down, flaps 15, speedbrake armed",
            "Final: landing flaps, ~300 ft/NM, 700-900 fpm",
            "Stable by 500 ft above TDZ"
          ],
          gotchas: [
            "Flaps are NOT drag devices — speedbrakes first, then early gear extension",
            "RoD >1000 fpm should be avoided on final",
            "Engine-out: ILS recommended over visual; rudder trim may be centered before landing so pedal pressure relaxes at idle touchdown",
            "Visual illusions: up-slope = looks high; down-slope = looks low; rain/haze/dark = looks high; bright lights = closer; narrow runway changes perspective",
            "RNAV Visual / FMS-CVFP must be retrievable from FMS database — crews NOT authorized to build them",
            "RNAV Visual / FMS-CVFP normally have NO published missed approach — coordinate with ATC for altitude/heading",
            "RWY may be selected on ARRIVALS page for visual approaches; FPA defaults to 3.00° (selectable). Does NOT meet VNAV instrument approach criteria"
          ],
          timing: "Stable by 500 ft above touchdown",
          aomRef: "AOM 10.7 Visual",
          relatedFlashcards: ["Approach", "Landing"]
        },
        {
          id: "circling_approach",
          type: "flow",
          who: "PF/PM",
          title: "Circling Maneuver",
          trigger: "Instrument approach that cannot be flown straight-in (≥30° offset or excessive descent rate)",
          description: "After completing the published instrument approach to circling MDA, maneuver visually to align with another runway. Aircraft must remain clear of clouds; ceiling ≥1000 ft (or charted) and visibility ≥3 SM (or charted). MDA = 1000 ft AFL or charted minima, whichever higher. Stay at or above MDA until the TDZ is in sight and a normal descent and turn will put you in the proper TDZ.",
          items: [
            { num: 1, name: "HUD MENU", setting: "MODE NP (BAE2020) or PRI (HGS) — verify G/S angle, RWY length, RWY elev", critical: false, subitems: [] },
            { num: 2, name: "FMC approach", setting: "Select straight-in or circle-to-land from current nav DB", critical: true, subitems: [] },
            { num: 3, name: "BARO MINS", setting: "1000 ft AFL or charted MDA (whichever higher), rounded UP to nearest 100 ft", critical: true, subitems: [] },
            { num: 4, name: "On intercept heading", setting: "LNAV (or appropriate), VNAV PTH selected/verified, MCP altitude → minimums", critical: true, subitems: [] },
            { num: 5, name: "At/before FAF", setting: "Use VNAV/LVL CHG/V/S prior to FAF; VNAV or V/S after the FAF", critical: false, subitems: [] },
            { num: 6, name: "Min config for maneuvering", setting: "Gear down, flaps 15, speedbrake armed (flaps 30 at VREF30 + additives if needed)", critical: true, subitems: [] },
            { num: 7, name: "At circling MDA", setting: "Verify VNAV ALT or ALT HLD — set MAA on MCP — select HDG SEL", critical: true, subitems: [] },
            { num: 8, name: "If visual", setting: "Maneuver shortest path to base or extended downwind, considering weather", critical: true, subitems: [] },
            { num: 9, name: "Prior to leaving MDA", setting: "Landing configuration complete, Before Landing checklist complete, AP disengaged", critical: true, subitems: [] },
            { num: 10, name: "If not visual", setting: "Execute missed approach", critical: true, subitems: [] },
            { num: 11, name: "Missed approach", setting: "Climbing turn in shortest direction TOWARD landing runway, then established on missed approach course", critical: true, subitems: [] }
          ],
          images: [],
          panelState: [
            "BARO MINS: max(1000 ft AFL, charted) rounded up to 100 ft",
            "MCP altitude: minimums (then MAA at MDA)",
            "Roll: LNAV → HDG SEL at MDA",
            "Pitch: VNAV PTH → ALT HLD at MDA",
            "Configuration: gear down, flaps 15 minimum (30 for tighter maneuvering)",
            "Map scale: 10 NM or less (PF)"
          ],
          gotchas: [
            "Aircraft MUST remain clear of clouds — ceiling ≥1000 ft, vis ≥3 SM (or charted, whichever higher)",
            "Watch for chart notes restricting circling (e.g. \"Circling north of extended runway centerline NA\")",
            "Side-step to a parallel runway with published minima is NOT a circling approach",
            "Max 1000 fpm after FAF (normally)",
            "Stay at/above MDA until TDZ in sight AND normal descent/turn will land in proper TDZ",
            "Crosschecking ground-based navaids for stepdown fixes is NOT necessary",
            "Loss of visual reference during circle: climbing turn TOWARD the landing runway, then fly the published miss",
            "AP recommended; PF flight director must be ON",
            "Non-NPS aircraft in LNAV: PM monitors XTK ERROR on RNP PROG page 4 (must not exceed approach RNP from IAF inbound)",
            "ANP > RNP: refer to QRH > MISCELLANEOUS > Raw Data Instrument Approach"
          ],
          timing: "MDA descent allowed only when TDZ in sight and normal turn/descent will land in TDZ",
          aomRef: "AOM 10.8 Circling Maneuver",
          relatedFlashcards: ["Approach", "Autoflight", "Navigation"]
        }
      ]
    },

    // ========================================================
    // PHASE 23 — GO-AROUNDS & REJECTED LANDING (AOM Ch 11)
    // ========================================================
    {
      id: "go_arounds_rejected_landing",
      number: 23,
      title: "Go-Arounds & Rejected Landing",
      category: "go-around",
      steps: [
        {
          id: "normal_go_around",
          type: "callout",
          who: "PF/PM",
          title: "Normal Go-Around — Actions & Callouts",
          trigger: "Go-around required — either pilot may direct it",
          description: "Either pilot may make the go-around callout. The PF MUST execute the directed go-around unless an emergency overrides. From flaps 30/40 → flaps 15. From flaps 15 → flaps 1. Push TO/GA, verify thrust increase, rotate to GA pitch attitude. With positive rate: gear up. Comply with published miss or ATC.",
          calloutSequence: [
            { type: "milestone", text: "Go-Around" },
            { who: "PF", type: "callout", text: "\"Go around, TOGA.\"" },
            { who: "PF", type: "action", text: "Push TO/GA switch" },
            { who: "PF", type: "action", text: "Verify that the thrust increases" },
            { who: "PF", type: "callout", text: "If landing from a Flaps 30 or 40 approach: \"Flaps 15.\"" },
            { who: "PF", type: "callout", text: "If landing from a Flaps 15 approach: \"Flaps 1.\"" },
            { who: "PF", type: "action", text: "Rotate to go-around pitch attitude" },
            { who: "PM", type: "action", text: "Set Flaps 15 or 1 as requested" },
            { who: "PM", type: "action", text: "Verify pitch FMA — TO/GA" },
            { who: "PM", type: "action", text: "Verify rotation to go-around pitch attitude" },
            { who: "PM", type: "action", text: "Verify desired thrust set" },

            { type: "milestone", text: "Positive rate of climb" },
            { who: "PF", type: "action", text: "Verify positive rate of climb on altimeter" },
            { who: "PF", type: "callout", text: "\"Positive rate.\"" },
            { who: "PM", type: "action", text: "Verify positive rate of climb on altimeter" },
            { who: "PF", type: "callout", text: "\"Gear up.\"" },
            { who: "PF", type: "action", text: "Execute published missed approach or proceed as instructed by ATC" },
            { who: "PM", type: "action", text: "Position Gear Lever UP" },
            { who: "PM", type: "action", text: "Monitor speed and attitude" },
            { who: "PF", type: "callout", text: "\"Set missed approach altitude.\"" },
            { who: "PM", type: "action", text: "Reset missed approach altitude as applicable" },
            { who: "PM", type: "action", text: "Advise ATC" },

            { type: "milestone", text: "Above 400 feet RA" },
            { who: "PF", type: "action", text: "Verify or call for appropriate roll mode" },
            { who: "PF", type: "action", text: "If requested, select HDG or LNAV (F/D holds ground track ≤400 ft RA; LNAV auto-engages >400 ft RA)" },
            { who: "PF", type: "action", text: "Ensure appropriate roll mode is annunciated on FMA" },
            { who: "PM", type: "action", text: "Ensure appropriate roll mode is annunciated on FMA" },
            { who: "PF", type: "action", text: "Check airspeed (retract flaps on schedule)" },
            { who: "PF", type: "callout", text: "\"Flaps ___.\"" },
            { who: "PM", type: "action", text: "Check airspeed" },
            { who: "PM", type: "action", text: "Select proper flap setting" },
            { who: "PM", type: "action", text: "Monitor flaps and slats retraction" },
            { who: "PF", type: "callout", text: "\"Flaps up, after takeoff checklist.\"" },
            { who: "PM", type: "action", text: "Check airspeed" },
            { who: "PM", type: "action", text: "Select flaps up" },
            { who: "PM", type: "action", text: "Monitor flaps and slats retraction" },
            { who: "PM", type: "action", text: "Monitor missed approach procedure" },

            { type: "milestone", text: "After flap retraction or planned flaps set" },
            { who: "PF", type: "callout", text: "\"VNAV.\"  or  \"LVL CHG, set speed.\"" },
            { who: "PM", type: "action", text: "Select VNAV or select LVL CHG, set speed as requested" },
            { who: "PM", type: "action", text: "Accomplish PM's After Takeoff Flow and After Takeoff Checklist" }
          ],
          images: [],
          panelState: [
            "TO/GA: pushed → A/T in GA mode (or N1 above 2000 ft RA)",
            "Pitch: ~15° nose up",
            "Flaps: 30/40 → 15, or 15 → 1",
            "Gear: UP after positive rate",
            "Roll: HDG SEL / LNAV after 400 ft RA",
            "MCP altitude: missed approach altitude"
          ],
          gotchas: [
            "Either pilot may call go-around — directed GA must be flown unless emergency overrides",
            "Go-around REQUIRED if transfer of control occurs below 500 ft AFL (except incapacitation if safer to land)",
            "First TO/GA push below 2000 ft RA: A/T → GA mode, advances to REDUCED GA N1 for 1000-2000 fpm climb. Second push for full GA",
            "First TO/GA push at/above 2000 ft RA with G/S engaged or flaps down: A/T → N1 mode at full GA limit",
            "After standard thrust takeoff (assumed temp), if cruise altitude ~15,000 ft NOT achieved, A/T may not advance to full GA — disconnect and set manually",
            "Throttle burst / firewalling NOT recommended unless safety in question",
            "When using flaps 1 for go-around: limit bank angle to 15° below VREF15+15 or min maneuver speed (whichever lower)",
            "Do NOT initiate turns prior to MAP",
            "Discontinued approach (using AP, not full GA): deselect ILS freq, set altitude/V/S/heading, select HDG or LNAV"
          ],
          timing: "TO/GA pitch ~15°; flap retraction at flap maneuver speeds",
          aomRef: "AOM 11.1 Normal Go-Around",
          relatedFlashcards: ["Go-Around", "Autoflight", "Approach"]
        },
        {
          id: "engine_out_go_around",
          type: "callout",
          who: "PF/PM",
          title: "Engine-Out Go-Around — Actions & Callouts",
          trigger: "Go-around required with engine inoperative",
          description: "Push TO/GA and advance thrust lever(s) — verify thrust increase. Rotate toward 13° pitch and select flaps 1. Control yaw with rudder and trim (some pedal pressure may be needed even with full trim). Lateral path: extended runway centerline OR ##-7E EO SID departure path. Maintain Vapp until at least 1000 ft AFL before accelerating.",
          calloutSequence: [
            { type: "milestone", text: "Go-Around" },
            { who: "PF", type: "callout", text: "\"Go around, TOGA.\"" },
            { who: "PF", type: "action", text: "Push TO/GA switch" },
            { who: "PF", type: "action", text: "Advance thrust lever(s) to go-around thrust" },
            { who: "PF", type: "action", text: "Verify that the thrust increases" },
            { who: "PF", type: "callout", text: "\"Flaps 1.\"" },
            { who: "PF", type: "action", text: "Rotate to go-around pitch attitude" },
            { who: "PM", type: "action", text: "Set flaps 1 as requested" },
            { who: "PM", type: "action", text: "Verify pitch FMA — TO/GA" },
            { who: "PM", type: "action", text: "Verify rotation to go-around pitch attitude" },
            { who: "PM", type: "action", text: "Verify desired thrust set" },

            { type: "milestone", text: "Positive rate of climb" },
            { who: "PF", type: "action", text: "Verify positive rate of climb on altimeter" },
            { who: "PF", type: "callout", text: "\"Positive rate.\"" },
            { who: "PM", type: "action", text: "Verify positive rate of climb on altimeter" },
            { who: "PF", type: "callout", text: "\"Gear up.\"" },
            { who: "PF", type: "action", text: "Execute published missed approach or proceed as instructed by ATC" },
            { who: "PM", type: "action", text: "Position gear lever UP" },
            { who: "PM", type: "action", text: "Monitor speed and attitude" },
            { who: "PF", type: "callout", text: "\"Set missed approach altitude.\"" },
            { who: "PM", type: "action", text: "Reset missed approach altitude as applicable" },
            { who: "PM", type: "action", text: "Advise ATC" },

            { type: "milestone", text: "Above 400 ft RA (or as required by EO SID Missed Approach)" },
            { who: "PF", type: "action", text: "Verify or call for appropriate roll mode" },
            { who: "PF", type: "action", text: "Fly straight-out along extended runway centerline or follow ##-7E engine failure departure path" },
            { who: "PF", type: "action", text: "If requested, select HDG or LNAV" },
            { who: "PF", type: "action", text: "Ensure appropriate roll mode is annunciated on FMA" },
            { who: "PM", type: "action", text: "Ensure appropriate roll mode is annunciated on FMA" },
            { who: "PM", type: "action", text: "Monitor missed approach procedure" },

            { type: "milestone", text: "At or above 1000 ft AFL (or as specified on Ops Advisory ##-7E)" },
            { who: "PF", type: "callout", text: "\"LVL CHG, set speed.\"" },
            { who: "PM", type: "action", text: "Select LVL CHG, set speed to flap retraction speed" },

            { type: "milestone", text: "At flap retraction speed" },
            { who: "PF", type: "action", text: "Check airspeed" },
            { who: "PF", type: "callout", text: "\"Flaps up.\"" },
            { who: "PM", type: "action", text: "Check airspeed" },
            { who: "PM", type: "action", text: "Select flaps UP" },

            { type: "milestone", text: "At flaps up maneuvering speed (UP bug)" },
            { who: "PF", type: "callout", text: "\"MCT, ____ checklist.\"" },
            { who: "PM", type: "action", text: "Select MCT and manually set thrust lever" },
            { who: "PM", type: "action", text: "Accomplish appropriate non-normal checklist(s)" },
            { who: "PM", type: "action", text: "Accomplish PM's After Takeoff Flow and After Takeoff Checklist" }
          ],
          images: [],
          panelState: [
            "Pitch: ~13°",
            "Flaps: 1",
            "Bank: ≤15° until clean",
            "Speed: Vapp until 1000 ft AFL minimum",
            "Roll mode: extended centerline or EO SID path",
            "Thrust: GA → MCT after cleanup"
          ],
          gotchas: [
            "Speed bug stays at Vapp until 1000 ft AFE minimum",
            "Maintain flaps 15, VREF30/40 + wind correction (5 kt min), bank ≤15° until maneuvering complete and safe altitude reached",
            "EO SID is selected as a route modification (RTE 2 LEGS, first EO SID waypoint, ACTIVATE, EXEC, LNAV)",
            "May need to execute EO SID before reaching 400 ft with engine inoperative",
            "Terrain/obstacle clearance ONLY assured along published EO SID lateral path",
            "Min flap retraction altitude for normal takeoff doesn't normally apply to missed approach — but consider obstacles",
            "If engine fails DURING go-around, perform Engine-Out Go-Around procedures and verify max GA thrust"
          ],
          timing: "Maintain Vapp until ≥1000 ft AFE before accelerating; MCT within 5 min",
          aomRef: "AOM 11.2 Engine-Out Go-Around",
          relatedFlashcards: ["Go-Around", "Engines", "Autoflight"]
        },
        {
          id: "rejected_landing",
          type: "callout",
          who: "PF/PM",
          title: "Rejected Landing — Go-Around After Touchdown (Before Reversers)",
          trigger: "Go-around initiated after touchdown but before thrust reverser selection",
          description: "⚠ After reverse thrust is initiated, a full stop landing MUST be made — if an engine stays in reverse, safe flight is not possible. (Before touchdown case: continue Normal Go-Around procedures; FD GA mode continues guidance throughout.)",
          calloutSequence: [
            { type: "milestone", text: "Go-Around" },
            { who: "PF", type: "callout", text: "\"Go around.\"" },
            { who: "PF", type: "action", text: "Smoothly advance thrust levers to go-around thrust" },
            { who: "PF", type: "action", text: "Maintain landing flap configuration" },
            { who: "PM", type: "action", text: "Verify SPEEDBRAKES retracted" },
            { who: "PM", type: "action", text: "Verify autobrakes disarm" },
            { who: "PM", type: "action", text: "Verify desired thrust is set" },

            { type: "milestone", text: "At VREF" },
            { who: "PM", type: "callout", text: "\"Rotate.\"" },
            { who: "PF", type: "action", text: "Smoothly rotate toward 15° pitch attitude (FD pitch command NOT used for rotation; column forces can vary)" },

            { type: "milestone", text: "When safely airborne" },
            { who: "PF", type: "action", text: "Verify positive rate of climb on altimeter" },
            { who: "PF", type: "action", text: "Select TO/GA to attain FD go-around mode" },
            { who: "PM", type: "action", text: "Verify positive rate of climb on altimeter" },
            { who: "PF", type: "action", text: "Continue Normal Go-Around" }
          ],
          images: [],
          panelState: [
            "Thrust: GA",
            "Flaps: maintain landing config",
            "Speedbrakes: retracted",
            "Autobrakes: disarmed",
            "Pitch: 15° at VREF"
          ],
          gotchas: [
            "WARNING: After reverse thrust is initiated, a full stop landing MUST be made — if an engine stays in reverse, safe flight is not possible",
            "Takeoff config warning horn may sound momentarily if flaps not retracted to 15 with thrust advancing",
            "If A/T disconnects on touchdown, A/T not available again until airborne",
            "FD GA mode continues to provide GA guidance throughout the maneuver"
          ],
          timing: "Immediate — must commit before reverser selection",
          aomRef: "AOM 11.3 Rejected Landing",
          relatedFlashcards: ["Go-Around", "Brakes", "Landing"]
        },
        {
          id: "prm_breakouts",
          type: "callout",
          who: "PF/PM",
          title: "PRM Breakouts (Climbing & Descending) — Actions & Callouts",
          trigger: "ATC: \"Traffic alert\" during PRM approach",
          description: "Aggressive immediate maneuver away from a closely-spaced parallel runway approach when ATC issues a traffic alert. Disconnect AP/AT, immediately turn and climb (or descend, max 1000 fpm) as directed. Follow TCAS RA vertical guidance if received. If currently on approach with LOC/GS captured, cycle both flight directors OFF then ON. Climbing and descending procedures are identical except for the vertical action.",
          calloutSequence: [
            { type: "milestone", text: "ATC advised \"Traffic alert\"" },
            { who: "PF", type: "callout", text: "\"Breakout.\"" },
            { who: "PF", type: "action", text: "Simultaneously: Disengage the autopilot" },
            { who: "PF", type: "action", text: "Disengage the autothrottle" },
            { who: "PF", type: "action", text: "Immediately turn to assigned heading as directed by ATC" },
            { who: "PF", type: "action", text: "CLIMBING breakout: Immediately climb to assigned altitude as directed by ATC" },
            { who: "PF", type: "action", text: "DESCENDING breakout: Immediately descend to assigned altitude as directed, NOT to exceed 1000 fpm" },
            { who: "PF", type: "action", text: "Follow TCAS RA vertical guidance, if received" },
            { who: "PF", type: "action", text: "If on an approach with LOC/GS captured, select both Flight Directors OFF, then ON" },
            { who: "PM", type: "action", text: "Set desired heading on MCP" },
            { who: "PM", type: "action", text: "Select HDG SEL" },
            { who: "PM", type: "action", text: "Set desired altitude on MCP" },
            { who: "PM", type: "action", text: "Select appropriate pitch mode (LVL CHG or V/S)" },
            { who: "PM", type: "action", text: "Verify all needed actions have been completed" },
            { who: "PF", type: "callout", text: "\"Set speed ___.\"" },
            { who: "PM", type: "action", text: "Set speed as requested" },
            { who: "PM", type: "action", text: "Monitor flight path and speed: call out deviations" },

            { type: "milestone", text: "Leveled off and established on heading" },
            { who: "PF", type: "action", text: "Reestablish automation" },
            { who: "PF", type: "action", text: "Reconfigure aircraft, as desired" },
            { who: "PM", type: "action", text: "Reconfigure aircraft, as desired" }
          ],
          images: [],
          panelState: [
            "AP/AT: disengaged",
            "Heading: as assigned (HDG SEL)",
            "Altitude: as assigned (LVL CHG or V/S)",
            "Descending breakout: max 1000 fpm",
            "FDs cycled if were on LOC/GS"
          ],
          gotchas: [
            "If controller vertical guidance conflicts with TCAS RA, follow the RA vertically and comply with ATC laterally",
            "Descending breakout capped at 1000 fpm",
            "Cycle BOTH flight directors OFF/ON if LOC/GS was captured (clears the captured mode cleanly)"
          ],
          timing: "Immediate — speed of execution is the entire point of the maneuver",
          aomRef: "AOM 11.4 PRM Breakouts",
          relatedFlashcards: ["Go-Around", "Approach", "TCAS"]
        }
      ]
    },

    // ========================================================
    // PHASE 24 — LANDING TECHNIQUES (AOM Ch 12)
    // ========================================================
    {
      id: "landing_techniques",
      number: 24,
      title: "Landing — Crosswind & Irregularities",
      category: "landing",
      steps: [
        {
          id: "crosswind_landing",
          type: "flow",
          who: "PF",
          title: "Crosswind Landing",
          trigger: "Landing with significant crosswind component",
          description: "Three accepted methods. (1) De-crab during flare: keep wings level on final, kick out crab in flare with downwind rudder, control roll with into-wind aileron. (2) Touchdown in crab: zero sideslip, recommended on very slippery runways but not on dry with strong crosswind. (3) Sideslip (wing-low): align with centerline using opposite rudder and lower upwind wing. Combinations may be needed in strong crosswinds.",
          items: [
            { num: 1, name: "Method 1 — De-crab in flare", setting: "Wings level on final with crab; in flare apply downwind rudder + into-wind aileron; touch down with crossed controls, both gear simultaneously", critical: true, subitems: [] },
            { num: 2, name: "Method 2 — Touchdown in crab", setting: "Allowed up to landing crosswind limit; on dry runway aircraft tracks toward upwind edge — apply immediate upwind aileron + rudder", critical: true, subitems: [
              { name: "Recommended on very slippery runways (faster spoiler/autobrake operation, reduced workload)", isNote: true },
              { name: "NOT recommended dry runway with strong crosswind (lateral deviation grows with crab angle)", isNote: true }
            ]},
            { num: 3, name: "Method 3 — Sideslip (wing low)", setting: "Crab inbound, before flare align with centerline using opposite rudder + lower upwind wing into a steady sideslip", critical: true, subitems: [
              { name: "Upwind wheels touch first, then downwind", isNote: true },
              { name: "Avoid overbanking — engine nacelle / outboard flap (NG) / winglet (MAX) can contact runway", isNote: true }
            ]},
            { num: 4, name: "If crab maintained on approach", setting: "Offset flightdeck on UPWIND side of centerline so main gear touches in the center", critical: false, subitems: [] },
            { num: 5, name: "Sideslip-only NOT recommended above:", setting: "Flaps 15: >15 kt XW; Flaps 30: >18 kt XW; Flaps 40: >21 kt XW", critical: true, subitems: [] }
          ],
          images: [],
          panelState: [
            "Method 1: wings level → crossed controls in flare",
            "Method 2: crab maintained through touchdown, immediate upwind aileron after",
            "Method 3: steady sideslip established before touchdown, upwind gear first"
          ],
          gotchas: [
            "Sideslip-only crosswind component limits ensure ground clearance and control margin",
            "May need to combine sideslip with residual crab in strong crosswinds — increase downwind rudder as upwind gear touches",
            "Turbulence with crosswinds makes maintaining cross-control coordination through the flare difficult",
            "On dry runway, touchdown-in-crab causes lateral deviation proportional to crab angle — one of the bigger surprises if not expecting it",
            "After touchdown in any method: positive upwind aileron + rudder for directional control"
          ],
          timing: "Method choice depends on wind, runway condition, and personal technique",
          aomRef: "AOM 12.2 Crosswind Landing",
          relatedFlashcards: ["Landing", "Flight Controls"]
        },
        {
          id: "bounced_landing",
          type: "flow",
          who: "PF",
          title: "Bounced Landing Recovery",
          trigger: "Aircraft bounces during landing",
          description: "If bounce is shallow: hold/re-establish landing attitude, add thrust as needed to control rate of descent (thrust not always required for shallow bounce/skip). If bounce is high and hard: GO AROUND. Manually advance thrust to GA, verify speedbrakes retract. Do NOT retract flaps or gear until positive rate established — a second touchdown may occur during the go-around.",
          items: [
            { num: 1, name: "Shallow bounce / skip", setting: "Hold or re-establish normal landing attitude; add thrust as needed to control RoD (not always required)", critical: true, subitems: [] },
            { num: 2, name: "High, hard bounce", setting: "INITIATE GO-AROUND", critical: true, subitems: [] },
            { num: 3, name: "Thrust", setting: "Manually advance thrust levers to go-around thrust", critical: true, subitems: [] },
            { num: 4, name: "Speedbrakes", setting: "Verify RETRACTED", critical: true, subitems: [] },
            { num: 5, name: "Flaps and gear", setting: "Do NOT retract until positive rate of climb established (second touchdown may occur)", critical: true, subitems: [] },
            { num: 6, name: "When safely airborne", setting: "Continue with Go-Around and Missed Approach procedure", critical: true, subitems: [] }
          ],
          images: [],
          panelState: [
            "Thrust: GA (manual)",
            "Speedbrakes: verify retracted",
            "Flaps/gear: NO change until positive rate"
          ],
          gotchas: [
            "If higher-than-idle thrust is held through initial touchdown, automatic speedbrake deployment may be DISABLED even with armed",
            "If thrust is then reduced to idle during the bounce, automatic speedbrake deploys — loss of lift + nose-up pitching = tail strike or hard landing on next touchdown",
            "Speedbrakes may NOT retract immediately after a shallow short bounce — increasing nose attitude with extended speedbrakes can cause tail strike",
            "Hard landing report: AML entry required, captain is final authority — specify nose-only / main-only / both, and bounced if applicable",
            "Bounced landing definition: both main gears contact ground, both leave the ground, prior to landing"
          ],
          timing: "Decision must be immediate — high hard bounce = go around",
          aomRef: "AOM 12.3 Landing Irregularities",
          relatedFlashcards: ["Landing", "Go-Around"]
        }
      ]
    },

    // ========================================================
    // PHASE 25 — INFLIGHT MANEUVERS (AOM Ch 17)
    // ========================================================
    {
      id: "inflight_maneuvers",
      number: 25,
      title: "Inflight Maneuvers",
      category: "emergency",
      steps: [
        {
          id: "stall_recovery",
          type: "callout",
          who: "PF/PM",
          title: "Approach to Stall / Stall Recovery — Actions & Callouts",
          trigger: "First indication of stall — buffet OR stickshaker",
          description: "Recover from any approach to stall as if a real stall has occurred. Reduction of angle of attack is the SINGLE MOST IMPORTANT action. Do NOT use flight director commands during recovery. Same procedure for impending stall and full stall.",
          calloutSequence: [
            { who: "PF", type: "action", text: "Recognize and confirm the situation" },

            { type: "milestone", text: "First indication of stall (buffet or stickshaker)" },
            { who: "PF", type: "callout", text: "\"My aircraft.\"" },
            { who: "PF", type: "action", text: "Initiate the recovery — Hold the control column firmly" },
            { who: "PF", type: "action", text: "Disengage autopilot" },
            { who: "PF", type: "action", text: "Disengage autothrottle" },
            { who: "PF", type: "action", text: "Smoothly apply nose down elevator to reduce angle of attack until buffet or stick shaker stops. Nose down stabilizer trim may be needed." },
            { who: "PM", type: "action", text: "Monitor attitude, airspeed, and altitude" },
            { who: "PM", type: "action", text: "Verify all actions have been completed and call out: any omissions; trend toward terrain contact (e.g., \"300 Feet Descending\", \"400 Feet Climbing\")" },

            { type: "milestone", text: "Continue the recovery" },
            { who: "PF", type: "action", text: "Roll in the shortest direction to wings level if needed" },
            { who: "PF", type: "action", text: "Advance thrust levers as needed (with high-thrust engines, REDUCING thrust may aid pitch control — underwing engines have nose-up pitch moment with thrust)" },
            { who: "PF", type: "action", text: "Retract the speedbrakes" },
            { who: "PF", type: "action", text: "Do NOT change gear or flap configuration, except: during liftoff with flaps up, call for flaps 1" },
            { who: "PM", type: "action", text: "Monitor attitude, airspeed, and altitude" },
            { who: "PM", type: "action", text: "Verify all actions completed and call out omissions / terrain trend" },
            { who: "PM", type: "action", text: "Set the FLAP lever as directed" },

            { type: "milestone", text: "Complete the recovery" },
            { who: "PF", type: "action", text: "Check airspeed and adjust thrust as needed" },
            { who: "PF", type: "action", text: "Establish pitch attitude" },
            { who: "PF", type: "action", text: "Return to the desired flight path" },
            { who: "PF", type: "action", text: "Re-engage the autopilot and autothrottle if desired" },
            { who: "PM", type: "action", text: "Monitor attitude, airspeed, and altitude" },
            { who: "PM", type: "action", text: "Verify all actions completed and call out omissions / terrain trend" }
          ],
          images: [],
          panelState: [
            "AP: disengaged",
            "AT: disengaged",
            "Speedbrakes: retracted",
            "Thrust: as needed (sometimes REDUCE first)",
            "FD: do NOT follow during recovery"
          ],
          gotchas: [
            "Reduction of angle of attack is the MOST important action — full forward column may be required",
            "Do NOT use flight director commands during recovery (FD not designed for stall escape)",
            "Stickshaker may NOT precede initial buffet — recover at the FIRST indication",
            "An aircraft can stall at ANY attitude or airspeed — attitude has no bearing on aerodynamic stall",
            "Stall recognized by: stickshaker, heavy buffet, lack of pitch authority, lack of roll control, inability to arrest descent",
            "High altitude (>20,000 ft): aircraft becomes thrust limited — must trade altitude for airspeed, expect greater altitude loss",
            "Do NOT retract flaps during recovery — retracting from landing config near ground causes altitude loss",
            "Speedbrakes UP increases buffet/stickshaker speed but has lesser effect on actual stall speed",
            "Rudder is normally NOT needed for roll control — see 17.10 Recommendations",
            "Autoslat extends to fully gapped near stickshaker (with flaps in certain settings)"
          ],
          timing: "Recover at first indication — stickshaker or initial buffet",
          aomRef: "AOM 17.1 Approach to Stall or Stall Recovery",
          relatedFlashcards: ["Aerodynamics", "Flight Controls", "Autoflight"]
        },
        {
          id: "upset_nose_high",
          type: "callout",
          who: "PF/PM",
          title: "Upset Recovery — Nose High — Actions & Callouts",
          trigger: "Pitch >25° nose up (or inappropriate airspeed for conditions)",
          description: "Recover from stall first if stalled. Then disconnect AP/AT, apply nose-down elevator, nose-down trim if needed, REDUCE thrust (underwing engines pitch up with thrust), and roll (up to 60° bank) to obtain a nose-down pitch rate. As airspeed increases, roll wings level approaching the horizon.",
          calloutSequence: [
            { who: "PF", type: "action", text: "Recognize and confirm the situation" },

            { type: "milestone", text: "First indication of nose high upset" },
            { who: "PF", type: "callout", text: "\"My aircraft.\"" },
            { who: "PF", type: "action", text: "Disengage autopilot" },
            { who: "PF", type: "action", text: "Disengage autothrottle" },
            { who: "PF", type: "action", text: "Recover: Apply nose down elevator. Apply as much elevator as needed to obtain a nose down pitch rate" },
            { who: "PF", type: "action", text: "Apply appropriate nose down stabilizer trim (excessive use of pitch trim or rudder can aggravate upset, result in loss of control or high structural loads)" },
            { who: "PF", type: "action", text: "Reduce thrust" },
            { who: "PF", type: "action", text: "Roll (adjust bank angle) to obtain a nose down pitch rate" },
            { who: "PM", type: "action", text: "Verify all actions have been completed and call out any omissions" },
            { who: "PM", type: "action", text: "Monitor attitude, airspeed, and altitude throughout the recovery" },
            { who: "PM", type: "action", text: "Call out any continued deviation" },

            { type: "milestone", text: "When airspeed is sufficiently increasing" },
            { who: "PF", type: "action", text: "Complete the recovery: When approaching the horizon, roll to wings level" },
            { who: "PF", type: "action", text: "Check airspeed and adjust thrust" },
            { who: "PF", type: "action", text: "Establish pitch attitude" },
            { who: "PM", type: "action", text: "Verify all needed actions have been done" }
          ],
          images: [],
          panelState: [
            "AP/AT: disengaged",
            "Elevator: nose down (up to full)",
            "Stab trim: nose down (incremental)",
            "Thrust: REDUCED",
            "Bank: 45°-60° if needed for pitch reduction"
          ],
          gotchas: [
            "Recover from stall FIRST if stalled — nose-down elevator until shaker stops, then upset recovery",
            "If pitch control not stopping rate: roll to bank (~45°-60°) to start the nose down — \"convert pitch into turn\"",
            "Unload wing with continuous nose-down elevator to keep AoA low → makes ailerons/spoilers effective",
            "Rudder is the LAST resort if normal pitch and roll are ineffective — small amount only, in direction of desired roll",
            "Too much rudder applied too quickly = loss of lateral/directional control",
            "Higher than normal control forces may be needed — be prepared for firm continuous force",
            "Use ADI as primary attitude reference — bank pointer always perpendicular to horizon, roll TOWARD the bank pointer for shortest direction",
            "HUD/HGS displays upset recovery symbology in excessive pitch/roll"
          ],
          timing: "First indication of nose-high upset",
          aomRef: "AOM 17.2 Upset Recovery (Nose High)",
          relatedFlashcards: ["Aerodynamics", "Flight Controls"]
        },
        {
          id: "upset_nose_low",
          type: "callout",
          who: "PF/PM",
          title: "Upset Recovery — Nose Low — Actions & Callouts",
          trigger: "Pitch >10° nose down (or inappropriate airspeed for conditions)",
          description: "Recover from stall first if stalled. Then disengage AP/AT, ROLL wings level (shortest direction — if bank >90°, unload and roll). When airspeed is sufficiently decreasing, apply nose-up elevator, nose-up trim if needed, adjust thrust and drag.",
          calloutSequence: [
            { who: "PF", type: "action", text: "Recognize and confirm the situation" },

            { type: "milestone", text: "First indication of nose low upset" },
            { who: "PF", type: "callout", text: "\"My aircraft.\"" },
            { who: "PF", type: "action", text: "Disengage autopilot" },
            { who: "PF", type: "action", text: "Disengage autothrottle" },
            { who: "PF", type: "action", text: "Recover: Recover from stall, if needed" },
            { who: "PF", type: "action", text: "Roll in the shortest direction to wings level. If bank angle is more than 90°, UNLOAD and roll" },
            { who: "PM", type: "action", text: "Verify all actions have been completed and call out any omissions" },
            { who: "PM", type: "action", text: "Monitor attitude, airspeed, and altitude throughout the recovery" },
            { who: "PM", type: "action", text: "Call out any continued deviation" },

            { type: "milestone", text: "When airspeed is sufficiently decreasing" },
            { who: "PF", type: "action", text: "Complete the recovery: Apply nose up elevator" },
            { who: "PF", type: "action", text: "Apply nose up trim, if needed" },
            { who: "PF", type: "action", text: "Adjust thrust and drag, if needed" },
            { who: "PM", type: "action", text: "Verify all needed actions have been done" }
          ],
          images: [],
          panelState: [
            "AP/AT: disengaged",
            "Bank: rolled to wings level (shortest direction)",
            "Speedbrakes: extended if airspeed high",
            "Elevator: nose up only after rolling out and airspeed decreasing"
          ],
          gotchas: [
            "Roll FIRST — do NOT pull up while still inverted past 90° bank",
            "If bank >90°: unload (nose-down elevator) to reduce wing AoA and improve roll capability — apply full aileron/spoiler input",
            "Do NOT increase g-force or use nose-up elevator/stab until approaching wings level",
            "Speedbrake extension causes nose-UP pitching moment, drag increase, lift decrease for same AoA — useful at moderate pitch attitudes",
            "Above VMO/MMO, nose-up pitch authority is reduced because of aerodynamic loads — may need nose-up trim",
            "At extreme nose-low high airspeed: nose-up elevator AND nose-up trim may be required",
            "Thrust reduction causes additional nose-down pitching moment",
            "Altitude is rapidly being exchanged for airspeed — even high above terrain, airspeed can rapidly exceed design limits"
          ],
          timing: "First indication of nose-low upset",
          aomRef: "AOM 17.2 Upset Recovery (Nose Low)",
          relatedFlashcards: ["Aerodynamics", "Flight Controls"]
        },
        {
          id: "windshear_escape",
          type: "callout",
          who: "PF/PM",
          title: "Windshear Escape Maneuver — Actions & Callouts",
          trigger: "Windshear encounter, predictive WS WARNING, or unacceptable flight path/airspeed deviations",
          description: "Push TO/GA, aggressively apply max thrust, disengage AP/AT, simultaneously roll wings level and rotate to 15° initial pitch. Retract speedbrakes. Follow FD TO/GA guidance without exceeding pitch limit indication. Do NOT change gear/flap configuration and do NOT attempt to regain lost airspeed until windshear is no longer a factor.",
          calloutSequence: [
            { type: "milestone", text: "When encountering a windshear" },
            { who: "PF", type: "callout", text: "\"Escape.\"" },
            { who: "PF", type: "callout", text: "\"My aircraft.\"" },
            { who: "PF", type: "action", text: "Immediately and simultaneously: Disengage autopilot" },
            { who: "PF", type: "action", text: "Push either TO/GA switch" },
            { who: "PF", type: "action", text: "Aggressively apply MAXIMUM thrust (full forward if EECs in normal mode)" },
            { who: "PF", type: "action", text: "Disengage the autothrottle" },
            { who: "PF", type: "action", text: "Simultaneously roll wings level and rotate toward an initial pitch attitude of 15°" },
            { who: "PF", type: "action", text: "Retract speedbrakes" },
            { who: "PF", type: "action", text: "Follow flight director TO/GA guidance (if available) without exceeding pitch limit indication (PLI)" },
            { who: "PM", type: "action", text: "Verify maximum thrust" },
            { who: "PM", type: "action", text: "Verify all actions have been completed and call out any omissions" },

            { type: "milestone", text: "Climb established" },
            { who: "PF", type: "action", text: "Monitor vertical speed and altitude" },
            { who: "PF", type: "action", text: "Maintain wings level to maximize climb gradient (unless turn required for obstacle clearance)" },
            { who: "PF", type: "action", text: "Do NOT: change gear/flap configuration until windshear is no longer a factor" },
            { who: "PF", type: "action", text: "Do NOT: attempt to regain lost airspeed until windshear is no longer a factor" },
            { who: "PM", type: "action", text: "Monitor vertical speed and altitude" },
            { who: "PM", type: "action", text: "Call out any trend toward terrain contact, descending flight path, or significant airspeed changes" },

            { type: "milestone", text: "After escape is successful" },
            { who: "PF", type: "action", text: "Resume normal flight" },
            { who: "PF", type: "action", text: "Retract gear and flaps as required" },
            { who: "PF", type: "action", text: "Issue PIREP to ATC" }
          ],
          images: [],
          panelState: [
            "Thrust: MAX (full forward)",
            "AP: disengaged",
            "AT: disengaged",
            "Pitch: 15° initial → up to PLI / intermittent shaker",
            "Speedbrakes: retracted",
            "Gear/flaps: UNCHANGED"
          ],
          gotchas: [
            "Aft column force INCREASES as airspeed decreases",
            "Intermittent stickshaker / initial buffet is the UPPER pitch limit — flight at intermittent shaker may be required for terrain separation",
            "Use smooth steady controls — avoid pitch overshoot and stall",
            "Maintain wings level to MAXIMIZE climb gradient unless turn required for obstacle clearance",
            "ALERTS: Caution \"Monitor radar display\" → continue if able to avoid; Warning \"Windshear ahead\" → normal GA OR escape maneuver; Warning \"Windshear, windshear, windshear\" → escape maneuver",
            "On takeoff: prior to V1 reject. At/above V1: continue and at VR rotate to 15° NLT 2000 ft remaining",
            "On approach with PWS warning: normal GA OR escape; with reactive WS warning: escape",
            "Recommended takeoff mitigation: max thrust, longest runway, flaps 5/15 (NG) or 5/10/15 (MAX), VR up to perf-limited weight VR, do NOT delay rotation past 2000 ft remaining",
            "Recommended landing mitigation: longest runway, ILS/VASI for path, flaps 30 consistent with field length, stable by 1000 ft AGL, minimize thrust reductions",
            "Microburst alert: do NOT take off or land — average windshear lasts only 10-15 minutes",
            "Cannot takeoff or fly final approach when ATC reports a runway-specific Microburst Alert (FOM)",
            "Severe windshear = airspeed change >15 kt"
          ],
          timing: "Average windshear lasts 10-15 minutes — delay or divert",
          aomRef: "AOM 17.3 Windshear",
          relatedFlashcards: ["Weather", "Engines", "Flight Controls"]
        },
        {
          id: "egpws_warning",
          type: "callout",
          who: "PF/PM",
          title: "EGPWS Warning (Pull Up) — Actions & Callouts",
          trigger: "\"PULL UP\", \"TERRAIN TERRAIN PULL UP\", \"OBSTACLE OBSTACLE PULL UP\", or unacceptable flight toward terrain",
          description: "Aggressive pull-up escape maneuver. Disengage AP/AT, max thrust, simultaneously roll wings level and rotate to 20° initial pitch. Retract speedbrakes. If terrain remains a threat, continue rotation up to PLI/stickshaker/initial buffet. Do NOT alter gear/flap configuration until terrain clearance assured. Cautions get a configuration/path correction or go-around — not the escape maneuver.",
          calloutSequence: [
            { type: "milestone", text: "Caution alert (AIRSPEED LOW, CAUTION TERRAIN/OBSTACLE, SINK RATE, TERRAIN, DON'T SINK, TOO LOW FLAPS/GEAR/TERRAIN, GLIDESLOPE, BANK ANGLE)" },
            { who: "PF", type: "action", text: "Correct the flight path, aircraft configuration, or airspeed" },
            { who: "PF", type: "action", text: "If on approach and stabilized approach requirements cannot be met → execute a go-around" },

            { type: "milestone", text: "Ground proximity WARNING alert (PULL UP, TERRAIN TERRAIN PULL UP, OBSTACLE OBSTACLE PULL UP)" },
            { who: "PF", type: "callout", text: "\"My aircraft.\"" },
            { who: "PF", type: "action", text: "Immediately and simultaneously: Disengage autopilot" },
            { who: "PF", type: "action", text: "Disengage autothrottle" },
            { who: "PF", type: "action", text: "Aggressively apply MAXIMUM thrust" },
            { who: "PF", type: "action", text: "Simultaneously roll wings level and rotate to an initial pitch attitude of 20°" },
            { who: "PF", type: "action", text: "Retract speedbrakes" },
            { who: "PF", type: "action", text: "If terrain remains a threat, continue rotation up to the pitch limit indicator (if available) or stick shaker or initial buffet" },
            { who: "PF", type: "action", text: "Monitor radio altimeter for sustained or increasing terrain separation" },
            { who: "PM", type: "action", text: "Ensure maximum thrust" },
            { who: "PM", type: "action", text: "Verify all actions have been completed and call out any omissions" },
            { who: "PM", type: "action", text: "Monitor vertical speed and altitude (radio altitude for terrain clearance, baro altitude for MSA)" },
            { who: "PM", type: "action", text: "Call out any trend toward terrain contact (e.g., \"300 Feet Descending\", \"400 Feet Climbing\")" },

            { type: "milestone", text: "Configuration" },
            { who: "PF", type: "action", text: "Do NOT alter gear/flap configuration until terrain clearance is assured" },

            { type: "milestone", text: "When clear of the terrain" },
            { who: "PF", type: "action", text: "Slowly decrease pitch attitude, and accelerate" },
            { who: "PF", type: "action", text: "Retract gear/flaps as required" },
            { who: "PF", type: "action", text: "Climb to safe altitude" },
            { who: "PF", type: "action", text: "Resume normal flight" }
          ],
          images: [],
          panelState: [
            "AP/AT: disengaged",
            "Thrust: MAX",
            "Pitch: 20° → up to PLI / shaker if needed",
            "Speedbrakes: retracted",
            "Gear/flaps: UNCHANGED until clear"
          ],
          gotchas: [
            "Initial pitch is 20° (NOT 15° like windshear)",
            "Do NOT use flight director commands during the escape maneuver",
            "Cautions (AIRSPEED LOW, CAUTION TERRAIN/OBSTACLE, SINK RATE, TERRAIN, DON'T SINK, TOO LOW FLAPS/GEAR/TERRAIN, GLIDESLOPE, BANK ANGLE): correct flight path/configuration/airspeed; if on approach and can't meet stable criteria → go around",
            "Below glideslope deviation alert can be cancelled/inhibited for: LOC/backcourse, circling from ILS, deliberate below G/S, unreliable G/S signal",
            "Look-ahead terrain warning in climb/cruise/descent that can be VERIFIED above MSA can be considered unreliable",
            "Daylight VMC + positive visual verification of no obstacle/terrain hazard: terrain/obstacle CAUTION may be regarded as cautionary, approach may be continued",
            "Aft column force increases as airspeed decreases — intermittent shaker = upper pitch limit",
            "Smooth steady controls — avoid overshoot and stall"
          ],
          timing: "Immediate — escape until clear of terrain",
          aomRef: "AOM 17.4 EGPWS",
          relatedFlashcards: ["Warning Systems", "Flight Controls", "Engines"]
        },
        {
          id: "tcas_ta",
          type: "callout",
          who: "PF/PM",
          title: "TCAS — Traffic Advisory (TA) — Actions & Callouts",
          trigger: "TCAS TA aural and traffic display",
          description: "Do NOT maneuver based on a TA alone. Both pilots look for the traffic using the display as a guide and call out conflicts. If traffic is sighted and a maneuver is necessary, maneuver visually.",
          calloutSequence: [
            { type: "milestone", text: "TCAS Traffic Advisory (TA) occurs" },
            { who: "PF", type: "action", text: "Look for traffic using traffic display as a guide" },
            { who: "PF", type: "action", text: "Call out any conflicting traffic" },
            { who: "PM", type: "action", text: "Look for traffic using traffic display as a guide" },
            { who: "PM", type: "action", text: "Call out any conflicting traffic" },

            { type: "milestone", text: "If traffic is sighted, maneuver if needed" }
          ],
          images: [],
          panelState: [
            "TCAS: TA active",
            "Traffic display: in view"
          ],
          gotchas: [
            "Maneuvers based SOLELY on a TA can result in reduced separation and are NOT recommended",
            "If transponder altitude reporting is OFF, TCAS is disabled"
          ],
          timing: "Immediate visual acquisition",
          aomRef: "AOM 17.5.1 TA Actions & Callouts",
          relatedFlashcards: ["TCAS", "Warning Systems"]
        },
        {
          id: "tcas_ra",
          type: "callout",
          who: "PF/PM",
          title: "TCAS — Resolution Advisory (RA) — Actions & Callouts",
          trigger: "TCAS RA — \"Climb / Descend / Adjust vertical speed / Maintain vertical speed\"",
          description: "Pilot must respond IMMEDIATELY to RA displays — even if conflicts with ATC. Disengage AP/AT, smoothly adjust pitch and thrust to satisfy the RA. Follow planned lateral path unless visual contact requires otherwise. SPECIAL CASE: a Climb RA in landing configuration uses an explicit go-around-style procedure (max thrust, flaps 15, gear up).",
          calloutSequence: [
            { type: "milestone", text: "TCAS Resolution Advisory (RA) — Standard (NOT a climb in landing configuration)" },
            { who: "PF", type: "callout", text: "\"My aircraft.\"" },
            { who: "PF", type: "action", text: "If maneuvering is required: Disengage autopilot" },
            { who: "PF", type: "action", text: "Disengage autothrottle" },
            { who: "PF", type: "action", text: "Smoothly adjust pitch and thrust to satisfy the RA command" },
            { who: "PF", type: "action", text: "Follow the planned lateral flight path unless visual contact with conflicting traffic requires other action" },
            { who: "PM", type: "action", text: "Attempt to establish visual contact" },
            { who: "PM", type: "action", text: "Call out any conflicting traffic" },

            { type: "milestone", text: "Climb RA in Landing Configuration" },
            { who: "PF", type: "callout", text: "\"My aircraft.\"" },
            { who: "PF", type: "action", text: "Disengage autopilot" },
            { who: "PF", type: "action", text: "Disengage autothrottle" },
            { who: "PF", type: "action", text: "Advance thrust levers forward to ensure maximum thrust is attained" },
            { who: "PM", type: "action", text: "Verify maximum thrust set" },
            { who: "PF", type: "callout", text: "\"Flaps 15.\"" },
            { who: "PF", type: "action", text: "Smoothly adjust pitch to satisfy the RA command" },
            { who: "PF", type: "action", text: "Follow the planned lateral flight path unless visual contact with conflicting traffic requires other action" },
            { who: "PM", type: "action", text: "Position flap lever to 15" },
            { who: "PM", type: "action", text: "Verify a positive rate of climb on the altimeter" },
            { who: "PF", type: "callout", text: "\"Positive Rate.\"" },
            { who: "PF", type: "action", text: "Verify a positive rate of climb on the altimeter" },
            { who: "PF", type: "callout", text: "\"Gear Up.\"" },
            { who: "PM", type: "action", text: "Landing Gear Lever UP" },
            { who: "PM", type: "action", text: "Attempt to establish visual contact" },
            { who: "PM", type: "action", text: "Call out any conflicting traffic" }
          ],
          images: [],
          panelState: [
            "AP/AT: disengaged",
            "Pitch/thrust: as needed for RA",
            "Lateral: unchanged unless visual conflict",
            "Climb RA in landing config: thrust MAX, flaps 15, gear up"
          ],
          gotchas: [
            "WARNING: A DESCEND (fly down) RA below 1000 ft AGL must NOT be followed",
            "Once an RA is issued, do NOT change vertical speed except to comply — TCAS-to-TCAS coordination may be in progress",
            "If controller vertical guidance conflicts with RA: follow RA vertically, comply with controller laterally",
            "Maneuver only as much as needed to satisfy the RA",
            "Do NOT use FD pitch commands until clear of conflict",
            "Visually acquired traffic may NOT be the same traffic causing the RA — visual perception can be misleading, especially at night",
            "If stickshaker/initial buffet during maneuver: do stall recovery immediately",
            "If high speed buffet: relax pitch but continue the maneuver",
            "Other warnings (windshear, GPWS) take precedence over RAs",
            "Complying with RAs may briefly exceed altitude or placard limits — return to assigned promptly when clear",
            "After RA: communicate with ATC ASAP after responding; advise when returning to clearance",
            "HUD displays preventive (no action) and corrective (positive evasion) advisories"
          ],
          timing: "IMMEDIATE — even if conflicts with ATC clearance",
          aomRef: "AOM 17.5.2 RA Actions & Callouts",
          relatedFlashcards: ["TCAS", "Warning Systems", "Autoflight"]
        },
        {
          id: "emergency_descent",
          type: "callout",
          who: "PF/PM",
          title: "Emergency Descent — Actions & Callouts",
          trigger: "Rapid loss of cabin pressure or other condition requiring rapid descent",
          description: "PF: \"Emergency descent\", \"My aircraft\". Set MCP to lower altitude (10,000 ft or MSA, whichever higher), select LVL CHG, close thrust levers, deploy speedbrakes to flight detent, set MMO/VMO. PM applies the QRC, selects START switches CONT, makes the PA, notifies ATC, and calls out 2000 and 1000 above level off.",
          calloutSequence: [
            { type: "milestone", text: "Emergency descent required" },
            { who: "PF", type: "callout", text: "\"Emergency Descent.\"" },
            { who: "PF", type: "callout", text: "\"My aircraft.\"" },

            { type: "milestone", text: "Altitude" },
            { who: "PF", type: "action", text: "Set MCP lower — Select a lower altitude and after descent is established select appropriate altitude" },
            { who: "PF", type: "action", text: "Descend to 10,000 feet or minimum safe altitude (whichever is higher)" },
            { who: "PF", type: "action", text: "Continue descent to 10,000 feet when able" },

            { type: "milestone", text: "Airspeed" },
            { who: "PF", type: "action", text: "Select LVL CHG" },
            { who: "PF", type: "action", text: "Close Thrust Levers (both) — reduce thrust to minimum or as needed for anti-ice" },
            { who: "PF", type: "action", text: "Speedbrakes — FLIGHT DETENT" },
            { who: "PF", type: "action", text: "Set MMO/VMO (if structural integrity in doubt, limit speed and avoid high maneuvering loads)" },

            { type: "milestone", text: "Heading" },
            { who: "PF", type: "action", text: "Select a turn or proceed straight ahead" },

            { type: "milestone", text: "PM duties" },
            { who: "PM", type: "action", text: "Notify ATC and request altimeter setting" },
            { who: "PM", type: "callout", text: "PA: \"Emergency descent - Use Oxygen - Fasten Seat Belts.\"" },
            { who: "PM", type: "action", text: "FASTEN BELTS — ON" },
            { who: "PM", type: "action", text: "ENGINE START switches — CONT" },
            { who: "PM", type: "action", text: "Check safe altitude (MEA, MOCA, MORA, MSA, depressurization cloud altitudes)" },

            { type: "milestone", text: "When cabin has descended below 10,000 feet" },
            { who: "PM", type: "action", text: "Notify flight attendants" },

            { type: "milestone", text: "2000 feet above level off" },
            { who: "PM", type: "callout", text: "\"2000 feet above level off.\"" },

            { type: "milestone", text: "1000 feet above level off" },
            { who: "PM", type: "callout", text: "\"1000 feet above level off.\"" },
            { who: "PF", type: "action", text: "Speedbrakes — Retract" }
          ],
          images: [],
          panelState: [
            "MCP altitude: lower (10,000 ft or MSA)",
            "Pitch mode: LVL CHG",
            "Thrust: idle",
            "Speedbrakes: flight detent",
            "Speed: MMO/VMO",
            "Gear: normally UP"
          ],
          gotchas: [
            "Rapid descents are NORMALLY made gear UP",
            "If structural integrity in doubt: limit airspeed to current or less, avoid high maneuvering loads — gear extended descent may be more satisfactory",
            "Use of LVL CHG with autopilot is RECOMMENDED — V/S mode is NOT recommended",
            "Brief overspeeds at VMO/MMO with AP engaged are normal due to wind/temp — AP should correct, do NOT disengage unless clearly unacceptable",
            "Document any overspeed in AML",
            "Initial level off altitude: max(10,000 ft, MEA/MOCA on airway, MORA off airway, highest MSA in terminal, depressurization cloud altitudes, IEA if applicable)",
            "Severe turbulence: reduce to turbulent air penetration speed",
            "Anti-ice + thrust as required if entering icing",
            "Manual flight: ~10° nose down initial; about 10 kt before target speed slowly raise pitch; keep in trim",
            "Speedbrake retraction near VMO/MMO can momentarily overspeed — retract slowly to allow AP pitch adjustment",
            "After level off: do NOT remove crew oxygen masks if cabin >10,000 ft; recheck pressurization, evaluate, get new ATC clearance"
          ],
          timing: "Place oxygen mask on / establish comm at FIRST indication of pressurization loss",
          aomRef: "AOM 17.6 Emergency Descent",
          relatedFlashcards: ["Pressurization", "Oxygen", "Autoflight"]
        },
        {
          id: "driftdown",
          type: "callout",
          who: "PF/PM",
          title: "Driftdown / One Engine Cruise — Actions & Callouts",
          trigger: "Engine fails at cruise — current altitude not maintainable, minimum descent rate desired",
          description: "Disconnect autothrottle, set MCT on operating engine, set engine-out driftdown speed in IAS/MACH window, set max engine-out altitude in MCP altitude. After aircraft decelerates to driftdown speed, select LVL CHG. PM notifies ATC and refers to QRH > ENGINES, APU > Driftdown and One Engine Cruise.",
          calloutSequence: [
            { type: "milestone", text: "An engine fails, current altitude cannot be maintained, minimum descent rate desired" },
            { who: "PF", type: "action", text: "Autothrottle — Disengage" },
            { who: "PF", type: "action", text: "Thrust Lever operating engine — Set MCT" },
            { who: "PF", type: "action", text: "MCP IAS/MACH window — Set engine out driftdown speed (.79/335 KIAS over water on Long Overwater Flights)" },
            { who: "PF", type: "action", text: "MCP ALTITUDE window — Set maximum engine out altitude" },

            { type: "milestone", text: "After aircraft decelerates to driftdown speed" },
            { who: "PF", type: "action", text: "Select LVL CHG" },
            { who: "PM", type: "action", text: "Notify ATC and request altimeter setting" },
            { who: "PM", type: "action", text: "Refer to QRH > ENGINES, APU > Driftdown and One Engine Cruise" },

            { type: "milestone", text: "After reaching bottom of driftdown — Terrain clearance IS a concern" },
            { who: "PF", type: "action", text: "Thrust: Continue with MCT" },
            { who: "PF", type: "action", text: "Speed: Cruise/Climb at the driftdown speed" },

            { type: "milestone", text: "After reaching bottom of driftdown — Terrain clearance is NOT a concern" },
            { who: "PF", type: "action", text: "Altitude: Use the One Engine LRC chart and level off at desired cruise altitude" },
            { who: "PF", type: "action", text: "Thrust: Set thrust to maintain level cruise (do not exceed MCT)" },
            { who: "PF", type: "action", text: "Speed: Cruise at One Engine LRC" },

            { type: "milestone", text: "If over water portion of Long Overwater Flights" },
            { who: "PF", type: "action", text: "Altitude: Use the appropriate One Engine High Speed Cruise chart" },
            { who: "PF", type: "action", text: "Thrust: Continue with MCT" },
            { who: "PF", type: "action", text: "Speed: Cruise/Climb at 335 KIAS — use One Engine High Speed Cruise chart" }
          ],
          images: [],
          panelState: [
            "AT: disengaged",
            "Operating engine: MCT (manually set)",
            "MCP IAS/MACH: ENG OUT driftdown speed",
            "MCP altitude: max ENG OUT alt",
            "Pitch mode: LVL CHG after decel"
          ],
          gotchas: [
            "ENG OUT driftdown speed and max altitude come from FMC CRZ page → ENG OUT prompt → failed engine prompt → ENG OUT CRZ",
            "Maintaining engine-out target speed and MCT will level off ABOVE the original max altitude — updated max is on ENG OUT CRZ page",
            "If at/below max ENG OUT altitude when failure occurs: select ENG OUT CRZ, maintain ENG OUT speed with manual thrust",
            "Severe engine damage: cowl/internal damage may prevent maintaining FMC max alt — fly target speed, MCT, descend until alt is maintainable. EEC may permit additional thrust below 15,000 ft / 0.45 Mach via forward mechanical stop",
            "Do NOT exceed MCT after level off",
            "Long Overwater Flights: diversion speed must remain within 60 min (.79/335 KIAS) of suitable airport — applies to NY Oceanic FIR, Western Atlantic, Gulf of Mexico"
          ],
          timing: "Driftdown begins when current altitude cannot be maintained",
          aomRef: "AOM 17.7 Driftdown and One Engine Cruise",
          relatedFlashcards: ["Engines", "Autoflight", "Performance"]
        },
        {
          id: "overspeed",
          type: "flow",
          who: "PF",
          title: "Overspeed (VMO/MMO Exceedance)",
          trigger: "Inadvertent VMO/MMO exceedance",
          description: "Leave the autopilot ENGAGED and use speedbrakes as needed UNLESS the AP is clearly not correcting. If manual inputs are required, disengage the AP smoothly (be aware of abrupt pitch change). Do NOT reduce thrust to idle at high altitude — slow engine accel back will overcontrol. Document any exceedance in AML.",
          items: [
            { num: 1, name: "Leave autopilot engaged", setting: "Unless clearly not correcting", critical: true, subitems: [] },
            { num: 2, name: "Speedbrakes", setting: "Deploy partial slowly until noticeable airspeed reduction", critical: true, subitems: [] },
            { num: 3, name: "When below VMO/MMO", setting: "Retract speedbrakes at the SAME rate they were deployed", critical: true, subitems: [] },
            { num: 4, name: "If manual inputs required", setting: "Disengage AP — be aware abrupt pitch change may result", critical: true, subitems: [] },
            { num: 5, name: "VNAV/LVL CHG not correcting", setting: "Switch to V/S temporarily — adjust V/S slightly to increase pitch attitude", critical: false, subitems: [] },
            { num: 6, name: "Below VMO/MMO", setting: "Re-select VNAV or LVL CHG", critical: false, subitems: [] },
            { num: 7, name: "AML entry", setting: "Note max IAS (or Mach above FL260), altitude, and configuration", critical: true, subitems: [] }
          ],
          images: [],
          panelState: [
            "AP: ENGAGED (preferred)",
            "Speedbrakes: partial → full as needed",
            "Pitch mode: VNAV/LVL CHG → V/S if needed → back when below limit"
          ],
          gotchas: [
            "Do NOT reduce thrust to idle at high altitude — slow engine accel back leads to overcontrolling or altitude loss",
            "Short-term excursions of 10-15 kt (≈.04-.06 Mach at altitude) are common in turbulence",
            "Mountain wave activity: be PROACTIVE",
            "Autothrottle has more aggressive control near VMO/MMO but cannot prevent all short-term overspeeds",
            "During descents at/near VMO/MMO: most overspeeds occur after VNAV path capture from above or level-off when speedbrakes were required to maintain path — DELAY speedbrake retraction until after VNAV path or altitude capture is complete",
            "Crews routinely climbing/descending in windshear may consider 5-10 kt reduction in climb/descent speeds (minimal fuel/time impact)",
            "Anytime VMO/MMO is exceeded → AML entry required (max IAS or Mach >FL260, altitude, configuration)"
          ],
          timing: "Document every exceedance in AML",
          aomRef: "AOM 17.9 Overspeed",
          relatedFlashcards: ["Autoflight", "Limitations", "Flight Instruments"]
        }
      ]
    },

    // ========================================================
    // PHASE 26 — SYSTEMS TESTS (consolidated reference)
    // ========================================================
    // All preflight system tests in one place. Each test lists exactly
    // WHEN it is normally accomplished, and the full procedure verbatim
    // from the AOM. Tests are also called out in their host flows
    // (Origination, General Preflight, Before Takeoff, etc.).
    {
      id: "systems_tests",
      number: 26,
      title: "Systems Tests",
      category: "reference",
      steps: [
        {
          id: "test_fire_overheat",
          type: "test",
          who: "CA/FO",
          title: "Fire & Overheat System Test",
          trigger: "WHEN — Electrical Power Up Procedure step 9 (APU branch). Also any first-flight or after-mx check.",
          description: "Verifies both detection loops, the fault monitoring circuitry, fire warning annunciations, and extinguisher squib continuity. Done as part of the APU-branch power-up sequence.",
          items: [
            { num: 1, name: "OVHT DET switches", setting: "NORMAL", critical: false, subitems: [] },
            { num: 2, name: "TEST switch", setting: "Hold to FAULT/INOP", critical: true, subitems: [
              { name: "MASTER CAUTION lights — Illum", isNote: true },
              { name: "OVHT/DET annunciator — Illum", isNote: true },
              { name: "FAULT light — Illum (if not, fault monitoring system is INOP)", isNote: true },
              { name: "APU DET INOP light — Illum", isNote: true },
              { name: "CAUTION: Do NOT operate the APU if APU DET INOP light fails to illuminate", isNote: true }
            ]},
            { num: 3, name: "TEST switch", setting: "Hold to OVHT/FIRE", critical: true, subitems: [
              { name: "Fire Warning Bell — Sounds", isNote: true },
              { name: "Master FIRE WARN lights — Illum", isNote: true },
              { name: "MASTER CAUTION lights — Illum", isNote: true },
              { name: "OVHT/DET annunciator — Illum", isNote: true }
            ]},
            { num: 4, name: "Master FIRE WARN light", setting: "Push", critical: true, subitems: [
              { name: "Master FIRE WARN lights — Extg", isNote: true },
              { name: "Fire Warning Bell — Cancels", isNote: true },
              { name: "ENG 1, APU, ENG 2 FIRE switch lights — Illum", isNote: true },
              { name: "3MY-3VM: ENG 1/2 Start Lever lights — Illum", isNote: true },
              { name: "ENG 1/2 OVERHEAT lights — Illum", isNote: true },
              { name: "WHEEL WELL fire warning light — Illum", isNote: true },
              { name: "3AA-3MX note: wheel well light may not illuminate on DC-only — retest after AC power", isNote: true }
            ]},
            { num: 5, name: "EXT TEST switch", setting: "Check", critical: true, subitems: [
              { name: "Position to 1 and hold — Extinguisher Test lights illum (3 green)", isNote: true },
              { name: "Release — lights extg", isNote: true },
              { name: "Repeat for position 2", isNote: true }
            ]}
          ],
          images: [],
          panelState: ["OVHT DET switches NORMAL", "All annunciations verified per steps 2–5"],
          gotchas: [
            "HARD RULE: Do not operate APU if APU DET INOP light does not illuminate during the FAULT/INOP test",
            "If FAULT light does not illuminate, the fault monitoring system itself is INOP",
            "3AA-3MX wheel well light unreliable on DC-only — retest after AC power is up",
            "If a loop fails: run 21g.1.2 Inoperative Loop procedure to isolate"
          ],
          timing: "~1–2 min",
          aomRef: "AOM 21g.1.1 Fire and Overheat System Test",
          relatedFlashcards: ["Fire Protection", "APU"]
        },
        {
          id: "test_wheel_well_fire",
          type: "test",
          who: "CA/FO",
          title: "Wheel Well Fire Detection Test (3AA-3MX only)",
          trigger: "WHEN — Electrical Power Up Procedure step 12 (APU branch). 3AA-3MX airframes only.",
          description: "Wheel well fire loop verification. Best run after AC power is established because the warning light may not illuminate reliably on DC-only.",
          items: [
            { num: 1, name: "Test switch", setting: "Hold to OVHT/FIRE", critical: true, subitems: [
              { name: "Fire Warning Bell — Sounds", isNote: true },
              { name: "Master FIRE WARN lights — Illum", isNote: true },
              { name: "MASTER CAUTION lights — Illum", isNote: true },
              { name: "OVHT/DET annunciator — On", isNote: true }
            ]},
            { num: 2, name: "Fire Warning BELL CUTOUT switch", setting: "Push", critical: true, subitems: [
              { name: "Master FIRE WARN lights — Extg", isNote: true },
              { name: "Fire Warning Bell — Cancels", isNote: true },
              { name: "WHEEL WELL Fire Warning light — Illum", isNote: true }
            ]}
          ],
          images: [],
          panelState: ["WHEEL WELL warning light verified", "Bell cancelled via BELL CUTOUT"],
          gotchas: [
            "3AA-3MX only — 3RA-3VM does not have this test",
            "Run after AC power is established for accurate wheel well light indication",
            "Use BELL CUTOUT to silence (not Master FIRE WARN push) — WHEEL WELL light needs to stay illuminated to verify"
          ],
          timing: "~30 sec",
          aomRef: "AOM 3.2.1 step 12 (Wheel Well Fire Detection System Test)",
          relatedFlashcards: ["Fire Protection"]
        },
        {
          id: "test_flight_deck_access",
          type: "test",
          who: "CA",
          title: "Flight Deck Access System Test",
          trigger: "WHEN — Origination Flow (first flight of the day or after unobserved mx) — final right-panel item.",
          description: "Verifies the cockpit door auto-unlock, deny, and lock-fail functions. CA-side responsibility on the right panel during Origination.",
          items: [
            { num: 1, name: "FLIGHT DECK ACCESS SYSTEM switch", setting: "Guarded", critical: false, subitems: [] },
            { num: 2, name: "Flight Deck Door", setting: "OPEN", critical: false, subitems: [] },
            { num: 3, name: "FLT DK DOOR selector", setting: "AUTO", critical: false, subitems: [] },
            { num: 4, name: "Emergency Access Code", setting: "Enter on keypad (3–8 digits)", critical: false, subitems: [] },
            { num: 5, name: "ENT Key", setting: "Push", critical: true, subitems: [
              { name: "Alert — Sounds", isNote: true },
              { name: "AUTO UNLK light — Illum", isNote: true }
            ]},
            { num: 6, name: "FLT DK DOOR selector", setting: "DENY", critical: true, subitems: [
              { name: "AUTO UNLK light — Extg", isNote: true }
            ]},
            { num: 7, name: "FLT DK DOOR selector", setting: "UNLKD", critical: false, subitems: [] },
            { num: 8, name: "FLIGHT DECK ACCESS SYSTEM switch", setting: "OFF", critical: true, subitems: [
              { name: "LOCK FAIL light — Illum", isNote: true }
            ]},
            { num: 9, name: "FLIGHT DECK ACCESS SYSTEM switch", setting: "Guarded", critical: true, subitems: [
              { name: "LOCK FAIL light — Extg", isNote: true }
            ]}
          ],
          images: [],
          panelState: ["Switch back to Guarded with LOCK FAIL extinguished — system normal"],
          gotchas: [
            "Door must be OPEN before starting the test",
            "Origination only — not done every flight",
            "If LOCK FAIL light won't extinguish after step 9, the door system is INOP — call mx",
            "Coordinate with the FA/cabin so the alert tone doesn't startle them"
          ],
          timing: "~1 min",
          aomRef: "AOM 3f.1 Origination Flow — Flight Deck Access System Check",
          relatedFlashcards: ["Doors", "Communications"]
        },
        {
          id: "test_tat_probe",
          type: "test",
          who: "FO",
          title: "TAT / Probe Heat Verification",
          trigger: "WHEN — General Preflight Flow (every flight) — Probe Heat panel item.",
          description: "There is no dedicated 'TAT test' on the 737 — the TAT probe heat is verified as part of the A/B PROBE HEAT switch check. With probe heat in AUTO on the ground, the TEMP PROBE light (and other probe heat warning lights) should illuminate, confirming heater current is NOT flowing (AUTO inhibits ground heating). Assumes ground deicing/cold weather logic is satisfied.",
          items: [
            { num: 1, name: "A and B PROBE HEAT switches", setting: "AUTO", critical: false, subitems: [
              { name: "CAPT and F/O PITOT lights — Illum", isNote: true },
              { name: "L and R ELEV PITOT lights — Illum", isNote: true },
              { name: "L and R ALPHA VANE lights — Illum", isNote: true },
              { name: "TEMP PROBE light — Illum", isNote: true },
              { name: "AUX PITOT light — Illum", isNote: true }
            ]},
            { num: 2, name: "If in icing conditions", setting: "A and B PROBE HEAT — ON", critical: true, subitems: [
              { name: "Verify all probe heat lights are EXTINGUISHED (heaters now powered on the ground)", isNote: true }
            ]}
          ],
          images: [],
          panelState: [
            "AUTO on ground: all probe-heat lights illum (heaters off, probes cold)",
            "ON in icing: all probe-heat lights extg (heaters powered)"
          ],
          gotchas: [
            "Lights ILLUM = heaters OFF (the lights are 'off when working' indicators)",
            "AUTO is normal — system controls heat based on engine running state",
            "Manual ON only when icing conditions exist on the ground (deicing, snow, freezing fog)",
            "If a single light stays illum after switching to ON, that probe heater is failed — refer to MEL"
          ],
          timing: "~10 sec",
          aomRef: "AOM 3f.2 General Preflight Flow — A and B PROBE HEAT switches",
          relatedFlashcards: ["Anti-Ice & Rain", "Flight Instruments"]
        },
        {
          id: "test_cvr",
          type: "test",
          who: "FO",
          title: "Cockpit Voice Recorder Test",
          trigger: "WHEN — General Preflight Flow (every flight) — after Hydraulic Panel set.",
          description: "Quick CVR functional check. Procedure differs by airframe variant.",
          items: [
            { num: "3AA-3DL", name: "TEST switch", setting: "Push and hold", critical: false, subitems: [
              { name: "After slight delay, monitor indicator rises into the GREEN band", isNote: true },
              { name: "A tone may be heard through a headset plugged into the headset jack", isNote: true },
              { name: "Indicator stays in green and tone continues until switch is released", isNote: true }
            ]},
            { num: "3DM-3VM", name: "TEST switch", setting: "Push (1 sec then release)", critical: false, subitems: [
              { name: "STATUS light illuminates ONCE within 6 seconds", isNote: true },
              { name: "A tone may be heard through a headset plugged into the headset jack", isNote: true }
            ]}
          ],
          images: [],
          panelState: ["3AA-3DL: monitor in green band while held", "3DM-3VM: STATUS flash within 6 sec"],
          gotchas: [
            "Know your airframe — the indication is different",
            "CVR records continuously when AC power is on — keep flightdeck conversation professional",
            "Failed test = CVR INOP, AML entry, MEL applies"
          ],
          timing: "~10 sec",
          aomRef: "AOM 21d.1.2 Cockpit Voice Recorder Test",
          relatedFlashcards: ["Communications"]
        },
        {
          id: "test_mach_airspeed_warn",
          type: "test",
          who: "FO",
          title: "Mach/Airspeed Warning Test",
          trigger: "WHEN — Origination Flow (first flight of the day or after unobserved mx) — right panel.",
          description: "Verifies the overspeed clacker on both warning channels.",
          items: [
            { num: 1, name: "MACH AIRSPEED WARNING test switches", setting: "Push TEST button one at a time", critical: true, subitems: [
              { name: "Clacker — Sounds for each switch tested", isNote: true }
            ]}
          ],
          images: [],
          panelState: ["Clacker sounds on both test switches"],
          gotchas: [
            "Test BOTH switches — they verify independent warning channels",
            "Clacker silences when you release the test button",
            "If clacker doesn't sound on one channel, that warning channel is INOP"
          ],
          timing: "~10 sec",
          aomRef: "AOM 3f.1 Origination Flow — MACH AIRSPEED WARNING Test switches",
          relatedFlashcards: ["Warning Systems", "Limitations"]
        },
        {
          id: "test_stall_warning",
          type: "test",
          who: "FO",
          title: "Stall Warning Test",
          trigger: "WHEN — Origination Flow (first flight of the day or after unobserved mx) — right panel, immediately after Mach/Airspeed Warning Test.",
          description: "Verifies stick shaker on each control column. Requires AC transfer busses powered for at least 4 minutes (gives the SMYD time to align).",
          items: [
            { num: 1, name: "STALL WARNING TEST switches", setting: "Push TEST button and hold one at a time", critical: true, subitems: [
              { name: "REQUIRES AC transfer busses powered ≥4 minutes", isNote: true },
              { name: "Control Columns — Each vibrates", isNote: true }
            ]},
            { num: 2, name: "If hyd power is OFF and test fails (LE flap droop causes asymmetric signal)", setting: "Pressurize hyd and retract", critical: false, subitems: [
              { name: "Obtain clearance to pressurize the hydraulic system", isNote: true },
              { name: "B HYD ELEC Pump — ON", isNote: true },
              { name: "Flaps — Retract", isNote: true },
              { name: "After flaps retracted, repeat the test", isNote: true },
              { name: "After test complete, B HYD ELEC Pump — OFF", isNote: true }
            ]}
          ],
          images: [],
          panelState: ["Both control columns vibrate when each test switch is held"],
          gotchas: [
            "4-minute AC bus warm-up requirement is real — if you test too early it may fail spuriously",
            "LE flap droop with hyd off can cause one channel to fail — re-test with B HYD ELEC ON and flaps retracted",
            "Test each side independently — both shakers must work",
            "Don't forget to turn B HYD ELEC pump back OFF after the re-test"
          ],
          timing: "~30 sec (longer if hyd-pressurize re-test needed)",
          aomRef: "AOM 3f.1 Origination Flow — STALL WARNING TEST switches",
          relatedFlashcards: ["Warning Systems", "Flight Controls"]
        },
        {
          id: "test_lights",
          type: "test",
          who: "FO",
          title: "Lights Test (Master LIGHTS TEST & DIM)",
          trigger: "WHEN — General Preflight Flow (every flight) — after Captain's Disengage Light TEST switch.",
          description: "Master flightdeck lights/annunciator test. Lights all the bulbs on the overhead, glareshield, and forward panels at once. Fire warning lights are NOT included in this test.",
          items: [
            { num: 1, name: "Master LIGHTS TEST and DIM switch", setting: "TEST", critical: true, subitems: [
              { name: "Note: The fire warning lights are NOT checked during this test", isNote: true },
              { name: "All Other Lights — Illum / Flashing", isNote: true },
              { name: "All System Annunciator Panel Lights — Illum", isNote: true },
              { name: "Use individual test switches or push-to-test features for any light that does NOT illuminate during this test", isNote: true }
            ]},
            { num: 2, name: "Master LIGHTS TEST and DIM switch", setting: "As needed", critical: false, subitems: [] }
          ],
          images: [],
          panelState: ["All annunciator/system panel bulbs verified", "Switch returned to BRT/DIM as needed"],
          gotchas: [
            "Fire warning lights need a SEPARATE test (Fire/Overheat System Test) — they don't light here",
            "Any bulb that fails: use individual push-to-test features to confirm whether the bulb or the system is faulty",
            "STAB OUT OF TRIM should be EXTINGUISHED after this test — check the next flow line",
            "Bright cockpit at night? Set DIM after test"
          ],
          timing: "~10 sec",
          aomRef: "AOM 3f.2 General Preflight Flow — Lights TEST",
          relatedFlashcards: ["Warning Systems", "Lighting"]
        },
        {
          id: "test_egpws",
          type: "test",
          who: "FO",
          title: "EGPWS / Ground Prox System Test",
          trigger: "WHEN — Required after IRS alignment is complete; typically run during the General Preflight Flow once IRS NAV is steady.",
          description: "Verifies EGPWS warning aurals, terrain display, and inhibition logic. Test is INHIBITED in flight.",
          items: [
            { num: 1, name: "IRS alignment", setting: "Complete", critical: true, subitems: [] },
            { num: 2, name: "EGPWS System Test switch", setting: "Press momentarily", critical: true, subitems: [
              { name: "Verify switch guards down", isNote: true },
              { name: "BELOW G/S light — Illum", isNote: true },
              { name: "EGPWS INOP light — Illum", isNote: true },
              { name: "PULL UP alert — Illum", isNote: true },
              { name: "WINDSHEAR alert — Illum", isNote: true },
              { name: "ND shows: TERR FAIL, TERR TEST, terrain test pattern, TERRAIN caution message", isNote: true },
              { name: "Aurals: 'GLIDE SLOPE', 'PULL UP', 'WINDSHEAR WINDSHEAR WINDSHEAR'", isNote: true },
              { name: "Aurals: 'TERRAIN TERRAIN PULL UP', 'CAUTION TERRAIN', 'AIRSPEED LOW'", isNote: true },
              { name: "3DM-3VM: 'OBSTACLE OBSTACLE PULL UP'", isNote: true },
              { name: "3UN-3VM: RUNWAY INOP light + ORW/RAAS status aural ('RUNWAY AWARENESS OK - FEET' / 'NOT AVAILABLE' / 'INOP')", isNote: true }
            ]},
            { num: 3, name: "If switch held until aurals begin", setting: "Extended test", critical: false, subitems: [
              { name: "Additional aurals tested: radio altitude alerts, bank angle, approach callouts, windshear, look-ahead terrain in flight", isNote: true }
            ]}
          ],
          images: [],
          panelState: ["All EGPWS lights & aurals verified", "Terrain test pattern visible on ND"],
          gotchas: [
            "MUST wait until IRS alignment is complete — test fails or gives false results otherwise",
            "Test INHIBITED in flight — only on the ground",
            "Hold switch longer for the extended aural test (radio alt, bank angle, approach callouts)",
            "Required after software updates and per AOM 21p.1.2 schedule"
          ],
          timing: "~30 sec (~1 min for extended)",
          aomRef: "AOM 21p.1.2 EGPWS Test",
          relatedFlashcards: ["Warning Systems", "Navigation"]
        },
        {
          id: "test_wxr_pws",
          type: "test",
          who: "FO",
          title: "Weather Radar & Predictive Windshear (PWS) Test",
          trigger: "WHEN — General Preflight Flow — Weather Radar item. Required when flight is planned through areas where adverse weather may occur.",
          description: "Two-part test: first the radar test pattern, then the PWS aural/visual alert verification. AVOID radar operation when personnel are in front of the nose radome.",
          items: [
            { num: "WXR.1", name: "EFIS Mode selector", setting: "MAP, MAP CTR, VOR, or APP", critical: false, subitems: [] },
            { num: "WXR.2", name: "Weather Radar Mode", setting: "TEST", critical: false, subitems: [] },
            { num: "WXR.3", name: "WXR switch (EFIS Control Panel)", setting: "ON", critical: true, subitems: [
              { name: "Verify test pattern with all four colors: Green, Amber, Red, Magenta", isNote: true }
            ]},
            { num: "WXR.4", name: "WXR switch (EFIS Control Panel)", setting: "OFF", critical: false, subitems: [] },
            { num: "PWS.1", name: "Weather Radar Mode", setting: "Deselect TEST", critical: false, subitems: [] },
            { num: "PWS.2", name: "WXR Switch (EFIS Control Panel)", setting: "ON", critical: true, subitems: [
              { name: "Note: In the short time WXR is ON and not in TEST, it WILL radiate", isNote: true }
            ]},
            { num: "PWS.3", name: "Weather Radar Mode", setting: "TEST", critical: true, subitems: [
              { name: "Amber WINDSHEAR Caution annunciation", isNote: true },
              { name: "'MONITOR RADAR DISPLAY' aural", isNote: true },
              { name: "Amber PWS FAIL annunciation", isNote: true },
              { name: "Red WINDSHEAR Warning annunciation on PFD and ND", isNote: true },
              { name: "'GO AROUND WINDSHEAR AHEAD' aural", isNote: true },
              { name: "'WINDSHEAR AHEAD, WINDSHEAR AHEAD' aural", isNote: true },
              { name: "All alerts momentarily generated then extinguish", isNote: true }
            ]},
            { num: "PWS.4", name: "WXR switch (EFIS Control Panel)", setting: "OFF", critical: false, subitems: [] }
          ],
          images: [],
          panelState: [
            "WXR test pattern: green/amber/red/magenta verified",
            "PWS warning + caution + fail flags all annunciated then cleared",
            "WXR switch returned to OFF (or as needed for departure)"
          ],
          gotchas: [
            "PERSONNEL CLEAR of nose radome before test — radar radiates briefly",
            "3RA-3VM: PWS test occurs AUTOMATICALLY during the WXR test — no separate PWS sequence",
            "Failure codes on left of ND: RT (xcvr), ANT (antenna), CONT (control panel), STAB (attitude input), CAL (calibration)",
            "If conducted in the air, only test patterns/results display — no other lights or aurals",
            "Required when planned through adverse wx — recommended every flight as good practice"
          ],
          timing: "~1 min",
          aomRef: "AOM 21p.1.6 Weather Radar and Predictive Windshear System Test",
          relatedFlashcards: ["Warning Systems", "Weather Radar", "Navigation"]
        },
        {
          id: "test_to_config",
          type: "test",
          who: "CA",
          title: "T/O CONFIG Preflight Test",
          trigger: "WHEN — General Preflight Flow item AND again on the Captain's Before Takeoff Flow. Required before every flight.",
          description: "Verifies the takeoff configuration warning system (flaps, stab, parking brake, spoilers) by forcing a warning condition.",
          items: [
            { num: 1, name: "T/O CONFIG switch", setting: "Press", critical: true, subitems: [
              { name: "TAKEOFF CONFIG lights — Illuminated", isNote: true },
              { name: "Takeoff Warning Horn — Sounds (intermittent)", isNote: true }
            ]}
          ],
          images: [],
          panelState: ["TAKEOFF CONFIG lights illum", "Intermittent warning horn audible"],
          gotchas: [
            "If installed (most fleet) — see SEL 34 if absent",
            "Done TWICE — once during General Preflight, once during Before Takeoff (CA)",
            "Horn is INTERMITTENT — solid horn means a real config problem exists",
            "After test, ensure TAKEOFF CONFIG light extinguishes before taxi",
            "Reference 21p.1.7 for the formal procedure"
          ],
          timing: "~10 sec",
          aomRef: "AOM 21p.1.7 T/O CONFIG Preflight Test",
          relatedFlashcards: ["Warning Systems", "Limitations"]
        },
        {
          id: "test_recall",
          type: "test",
          who: "FO",
          title: "Recall Check (Master Caution Recall)",
          trigger: "WHEN — Pushback/Start flow, after 'I have a salute' callout and before the After Start Checklist (every flight).",
          description: "Confirms no annunciator lights are stuck or hidden by the Master Caution Recall system — i.e., no single failures in dual-redundant systems.",
          items: [
            { num: 1, name: "Either System Annunciator Light Panel", setting: "Depress and hold", critical: true, subitems: [
              { name: "Both MASTER CAUTION lights — Illum", isNote: true },
              { name: "All lights illuminate in BOTH Annunciator Light Panels", isNote: true }
            ]},
            { num: 2, name: "System Annunciator Light Panel", setting: "Release", critical: true, subitems: [
              { name: "If MASTER CAUTION lights remain ILLUM (with or without individual annunciators) → INVESTIGATE the cause", isNote: true }
            ]}
          ],
          images: [],
          panelState: [
            "Both Master Caution lights illuminate while held",
            "Both 6-pack annunciators fully lit while held",
            "Everything extinguishes on release (if no faults)"
          ],
          gotchas: [
            "Recall faults that RESET when MASTER CAUTION is pressed = single failure (dispatchable per MEL)",
            "Recall faults that REMAIN illuminated = dual failure (NNC required)",
            "Done after both engines started, before After Start Checklist",
            "Both pilots verify any fault — coordinate before resetting",
            "On the ground a single failure has no QRH NNC; contact mx, MEL allows one system placard"
          ],
          timing: "~10 sec",
          aomRef: "AOM 21p.2.1 Recall and Master Caution System",
          relatedFlashcards: ["Warning Systems"]
        },
        {
          id: "test_tcas",
          type: "test",
          who: "FO",
          title: "TCAS Test (bonus — same panel)",
          trigger: "WHEN — Optional with the EGPWS test or as part of Transponder setup. Requires IRS aligned and in NAV.",
          description: "Quick TCAS self-test from the transponder panel.",
          items: [
            { num: 1, name: "Transponder Switch", setting: "TEST", critical: true, subitems: [
              { name: "Fail Light — Illum", isNote: true },
              { name: "All code segments — Illum", isNote: true },
              { name: "Verify no error codes", isNote: true },
              { name: "Aural — 'TCAS SYSTEM TEST – OKAY'", isNote: true },
              { name: "ND — 'TCAS TEST' displayed, then 'TCAS TEST OK' or 'TCAS TEST FAILED' (8 sec)", isNote: true }
            ]}
          ],
          images: [],
          panelState: ["TCAS TEST OK on ND, aural confirmed"],
          gotchas: [
            "Requires IRS aligned and in NAV mode",
            "'TCAS System Fail' aural = test failed, mx required",
            "Test result remains on ND for 8 seconds then blanks"
          ],
          timing: "~15 sec",
          aomRef: "AOM 21p.1.5 TCAS Test",
          relatedFlashcards: ["Warning Systems", "Communications"]
        }
      ]
    }
  ]
};
