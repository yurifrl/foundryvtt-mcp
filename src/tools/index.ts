import { Tool } from '@modelcontextprotocol/sdk/types.js';

export const toolDefinitions: Tool[] = [
  // Basic Tools
  {
    name: 'roll_dice',
    description: 'Roll dice using standard RPG notation (1d20, 2d6+3, etc.)',
    inputSchema: {
      type: 'object',
      properties: {
        formula: {
          type: 'string',
          description: 'Dice formula in standard notation (e.g., "1d20+5", "3d6", "2d10+1d4")',
          pattern: '^[0-9]+d[0-9]+([+-][0-9]+)*import { Tool } from '@modelcontextprotocol/sdk/types.js';

export const toolDefinitions: Tool[] = [
  {
    name: 'roll_dice',
    description: 'Roll dice using standard RPG notation (1d20, 2d6+3, etc.)',
    inputSchema: {
      type: 'object',
      properties: {
        formula: {
          type: 'string',
          description: 'Dice formula in standard notation (e.g., "1d20+5", "3d6", "2d10+1d4")',
          pattern: '^[0-9]+d[0-9]+([+-][0-9]+)*$'
        },
        reason: {
          type: 'string',
          description: 'Optional reason for the roll (e.g., "Attack roll", "Saving throw")'
        }
      },
      required: ['formula']
    }
  },
  
  {
    name: 'search_actors',
    description: 'Search for actors (characters, NPCs, monsters) in the current world',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Search term to match against actor names'
        },
        type: {
          type: 'string',
          description: 'Filter by actor type (e.g., "character", "npc", "monster")'
        },
        limit: {
          type: 'number',
          description: 'Maximum number of results to return (default: 10, max: 50)',
          minimum: 1,
          maximum: 50
        }
      }
    }
  },
  
  {
    name: 'search_items',
    description: 'Search for items, equipment, spells, and other game objects',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Search term to match against item names and descriptions'
        },
        type: {
          type: 'string',
          description: 'Filter by item type (e.g., "weapon", "armor", "spell", "consumable")'
        },
        rarity: {
          type: 'string',
          description: 'Filter by rarity (e.g., "common", "uncommon", "rare", "very rare", "legendary")'
        },
        limit: {
          type: 'number',
          description: 'Maximum number of results to return (default: 10, max: 50)',
          minimum: 1,
          maximum: 50
        }
      }
    }
  },
  
  {
    name: 'get_scene_info',
    description: 'Get information about the current scene or a specific scene',
    inputSchema: {
      type: 'object',
      properties: {
        sceneId: {
          type: 'string',
          description: 'Optional scene ID. If not provided, returns current active scene'
        }
      }
    }
  },
  
  {
    name: 'get_actor_details',
    description: 'Get detailed information about a specific actor',
    inputSchema: {
      type: 'object',
      properties: {
        actorId: {
          type: 'string',
          description: 'The ID of the actor to retrieve'
        }
      },
      required: ['actorId']
    }
  },
  
  {
    name: 'update_actor_hp',
    description: 'Update an actor\'s hit points',
    inputSchema: {
      type: 'object',
      properties: {
        actorId: {
          type: 'string',
          description: 'The ID of the actor to update'
        },
        change: {
          type: 'number',
          description: 'HP change amount (positive for healing, negative for damage)'
        },
        temp: {
          type: 'boolean',
          description: 'Whether this affects temporary hit points',
          default: false
        }
      },
      required: ['actorId', 'change']
    }
  },
  
  {
    name: 'search_journals',
    description: 'Search journal entries and notes',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Search term to match against journal content'
        },
        folder: {
          type: 'string',
          description: 'Filter by folder name'
        },
        limit: {
          type: 'number',
          description: 'Maximum number of results to return (default: 10)',
          minimum: 1,
          maximum: 50
        }
      }
    }
  },
  
  {
    name: 'generate_npc',
    description: 'Generate a random NPC with basic stats and personality',
    inputSchema: {
      type: 'object',
      properties: {
        race: {
          type: 'string',
          description: 'Specific race for the NPC (optional, will be random if not specified)'
        },
        level: {
          type: 'number',
          description: 'Character level (1-20, defaults to random based on context)',
          minimum: 1,
          maximum: 20
        },
        role: {
          type: 'string',
          description: 'NPC role or profession (e.g., "merchant", "guard", "noble", "commoner")'
        },
        alignment: {
          type: 'string',
          description: 'Specific alignment (optional)'
        }
      }
    }
  },
  
  {
    name: 'generate_loot',
    description: 'Generate random treasure or loot appropriate for the party level',
    inputSchema: {
      type: 'object',
      properties: {
        challengeRating: {
          type: 'number',
          description: 'Challenge rating or party level to base loot on',
          minimum: 0,
          maximum: 30
        },
        treasureType: {
          type: 'string',
          description: 'Type of treasure to generate',
          enum: ['individual', 'hoard', 'art', 'gems', 'magic_items']
        },
        includeCoins: {
          type: 'boolean',
          description: 'Whether to include coins in the loot',
          default: true
        }
      },
      required: ['challengeRating']
    }
  },
  
  {
    name: 'roll_table',
    description: 'Roll on a random table or generate random encounters',
    inputSchema: {
      type: 'object',
      properties: {
        tableType: {
          type: 'string',
          description: 'Type of random table to roll on',
          enum: ['encounter', 'weather', 'event', 'npc_trait', 'location_feature', 'treasure']
        },
        environment: {
          type: 'string',
          description: 'Environment context for encounters/events (e.g., "forest", "dungeon", "city")'
        },
        partyLevel: {
          type: 'number',
          description: 'Party level for appropriate encounter difficulty',
          minimum: 1,
          maximum: 20
        }
      },
      required: ['tableType']
    }
  },
  
  {
    name: 'get_combat_status',
    description: 'Get current combat state and initiative order',
    inputSchema: {
      type: 'object',
      properties: {
        detailed: {
          type: 'boolean',
          description: 'Include detailed combatant information',
          default: false
        }
      }
    }
  },
  
  {
    name: 'suggest_tactics',
    description: 'Get tactical suggestions for combat encounters',
    inputSchema: {
      type: 'object',
      properties: {
        actorId: {
          type: 'string',
          description: 'Actor ID to provide tactics for'
        },
        situation: {
          type: 'string',
          description: 'Current combat situation or context'
        },
        enemies: {
          type: 'array',
          items: {
            type: 'string'
          },
          description: 'List of enemy types or names'
        }
      }
    }
  },
  
  {
    name: 'lookup_rule',
    description: 'Look up game rules, spells, or mechanical information',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Rule, spell, or mechanic to look up'
        },
        category: {
          type: 'string',
          description: 'Category to search in',
          enum: ['spells', 'conditions', 'actions', 'rules', 'items', 'monsters']
        },
        system: {
          type: 'string',
          description: 'Game system (defaults to current world system)'
        }
      },
      required: ['query']
    }
  }
];
        },
        reason: {
          type: 'string',
          description: 'Optional reason for the roll (e.g., "Attack roll", "Saving throw")'
        }
      },
      required: ['formula']
    }
  },
  
  // Search & Query Tools
  {
    name: 'search_actors',
    description: 'Search for actors (characters, NPCs, monsters) in the current world',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Search term to match against actor names'
        },
        type: {
          type: 'string',
          description: 'Filter by actor type (e.g., "character", "npc", "monster")'
        },
        limit: {
          type: 'number',
          description: 'Maximum number of results to return (default: 10, max: 50)',
          minimum: 1,
          maximum: 50
        }
      }
    }
  },
  
  {
    name: 'search_items',
    description: 'Search for items, equipment, spells, and other game objects',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Search term to match against item names and descriptions'
        },
        type: {
          type: 'string',
          description: 'Filter by item type (e.g., "weapon", "armor", "spell", "consumable")'
        },
        rarity: {
          type: 'string',
          description: 'Filter by rarity (e.g., "common", "uncommon", "rare", "very rare", "legendary")'
        },
        limit: {
          type: 'number',
          description: 'Maximum number of results to return (default: 10, max: 50)',
          minimum: 1,
          maximum: 50
        }
      }
    }
  },
  
  {
    name: 'get_scene_info',
    description: 'Get information about the current scene or a specific scene',
    inputSchema: {
      type: 'object',
      properties: {
        sceneId: {
          type: 'string',
          description: 'Optional scene ID. If not provided, returns current active scene'
        }
      }
    }
  },
  
  {
    name: 'get_actor_details',
    description: 'Get detailed information about a specific actor',
    inputSchema: {
      type: 'object',
      properties: {
        actorId: {
          type: 'string',
          description: 'The ID of the actor to retrieve'
        }
      },
      required: ['actorId']
    }
  },

  // Combat Management Tools
  {
    name: 'start_combat',
    description: 'Initialize a new combat encounter with specified combatants',
    inputSchema: {
      type: 'object',
      properties: {
        combatants: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              hp: { 
                type: 'object',
                properties: {
                  current: { type: 'number' },
                  max: { type: 'number' }
                }
              },
              ac: { type: 'number' },
              initiative: { type: 'number' },
              actorId: { type: 'string' }
            },
            required: ['name', 'hp']
          },
          description: 'Array of combatants to add to the encounter'
        },
        autoRollInitiative: {
          type: 'boolean',
          description: 'Automatically roll initiative for all combatants',
          default: true
        }
      },
      required: ['combatants']
    }
  },

  {
    name: 'combat_next_turn',
    description: 'Advance to the next combatant\'s turn in active combat',
    inputSchema: {
      type: 'object',
      properties: {}
    }
  },

  {
    name: 'apply_damage',
    description: 'Apply damage to a combatant in active combat',
    inputSchema: {
      type: 'object',
      properties: {
        combatantId: {
          type: 'string',
          description: 'ID of the combatant to damage'
        },
        damage: {
          type: 'number',
          description: 'Amount of damage to apply',
          minimum: 0
        },
        damageType: {
          type: 'string',
          description: 'Type of damage (e.g., "fire", "slashing", "psychic")'
        }
      },
      required: ['combatantId', 'damage']
    }
  },

  {
    name: 'heal_combatant',
    description: 'Heal a combatant in active combat',
    inputSchema: {
      type: 'object',
      properties: {
        combatantId: {
          type: 'string',
          description: 'ID of the combatant to heal'
        },
        healing: {
          type: 'number',
          description: 'Amount of healing to apply',
          minimum: 0
        }
      },
      required: ['combatantId', 'healing']
    }
  },

  {
    name: 'apply_condition',
    description: 'Apply a condition or status effect to a combatant',
    inputSchema: {
      type: 'object',
      properties: {
        combatantId: {
          type: 'string',
          description: 'ID of the combatant'
        },
        condition: {
          type: 'string',
          description: 'Condition to apply (e.g., "poisoned", "charmed", "prone")'
        },
        duration: {
          type: 'number',
          description: 'Duration in rounds (optional)'
        }
      },
      required: ['combatantId', 'condition']
    }
  },

  {
    name: 'get_combat_status',
    description: 'Get current combat state and initiative order',
    inputSchema: {
      type: 'object',
      properties: {
        detailed: {
          type: 'boolean',
          description: 'Include detailed combatant information',
          default: false
        }
      }
    }
  },

  {
    name: 'end_combat',
    description: 'End the current combat encounter',
    inputSchema: {
      type: 'object',
      properties: {}
    }
  },

  // Character Management Tools
  {
    name: 'level_up_character',
    description: 'Level up a character with automatic calculations and suggestions',
    inputSchema: {
      type: 'object',
      properties: {
        actorId: {
          type: 'string',
          description: 'ID of the character to level up'
        },
        hitPointMethod: {
          type: 'string',
          enum: ['roll', 'average', 'max'],
          description: 'Method for determining hit point gain',
          default: 'average'
        },
        abilityScoreImprovements: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              ability: { type: 'string' },
              increase: { type: 'number', minimum: 1, maximum: 2 }
            }
          },
          description: 'Manual ability score improvements (auto-suggested if not provided)'
        }
      },
      required: ['actorId']
    }
  },

  {
    name: 'manage_character_resources',
    description: 'Track and manage character resources (spell slots, abilities, etc.)',
    inputSchema: {
      type: 'object',
      properties: {
        actorId: {
          type: 'string',
          description: 'ID of the character'
        },
        action: {
          type: 'string',
          enum: ['track', 'use', 'restore', 'view'],
          description: 'Action to perform'
        },
        resourceName: {
          type: 'string',
          description: 'Name of the resource (e.g., "Spell Slots Level 1", "Rage", "Action Surge")'
        },
        amount: {
          type: 'number',
          description: 'Amount to use/restore (for use/restore actions)',
          minimum: 0
        },
        maxValue: {
          type: 'number',
          description: 'Maximum value (for track action)',
          minimum: 1
        },
        resetType: {
          type: 'string',
          enum: ['short_rest', 'long_rest', 'daily', 'manual'],
          description: 'When this resource resets (for track action)'
        }
      },
      required: ['actorId', 'action']
    }
  },

  {
    name: 'character_rest',
    description: 'Process short or long rest for character(s)',
    inputSchema: {
      type: 'object',
      properties: {
        actorIds: {
          type: 'array',
          items: { type: 'string' },
          description: 'IDs of characters taking the rest'
        },
        restType: {
          type: 'string',
          enum: ['short_rest', 'long_rest'],
          description: 'Type of rest'
        },
        restoreHitPoints: {
          type: 'boolean',
          description: 'Whether to restore hit points (long rest only)',
          default: true
        }
      },
      required: ['actorIds', 'restType']
    }
  },

  {
    name: 'analyze_party_composition',
    description: 'Analyze party balance and provide optimization suggestions',
    inputSchema: {
      type: 'object',
      properties: {
        actorIds: {
          type: 'array',
          items: { type: 'string' },
          description: 'IDs of party members to analyze'
        },
        includeOptimization: {
          type: 'boolean',
          description: 'Include character build optimization suggestions',
          default: false
        }
      },
      required: ['actorIds']
    }
  },

  {
    name: 'distribute_treasure',
    description: 'Intelligently distribute treasure among party members',
    inputSchema: {
      type: 'object',
      properties: {
        treasureValue: {
          type: 'number',
          description: 'Total value of treasure to distribute (in gold pieces)',
          minimum: 0
        },
        actorIds: {
          type: 'array',
          items: { type: 'string' },
          description: 'IDs of party members'
        },
        distributionMethod: {
          type: 'string',
          enum: ['equal', 'need_based', 'contribution'],
          description: 'Method for distribution',
          default: 'equal'
        }
      },
      required: ['treasureValue', 'actorIds']
    }
  },

  // Advanced Content Generation
  {
    name: 'generate_npc',
    description: 'Generate a random NPC with basic stats and personality',
    inputSchema: {
      type: 'object',
      properties: {
        race: {
          type: 'string',
          description: 'Specific race for the NPC (optional, will be random if not specified)'
        },
        level: {
          type: 'number',
          description: 'Character level (1-20, defaults to random based on context)',
          minimum: 1,
          maximum: 20
        },
        role: {
          type: 'string',
          description: 'NPC role or profession (e.g., "merchant", "guard", "noble", "commoner")'
        },
        alignment: {
          type: 'string',
          description: 'Specific alignment (optional)'
        },
        detailLevel: {
          type: 'string',
          enum: ['basic', 'detailed', 'full'],
          description: 'Amount of detail to generate',
          default: 'detailed'
        }
      }
    }
  },

  {
    name: 'generate_dungeon_room',
    description: 'Generate a detailed dungeon room with features, hazards, and contents',
    inputSchema: {
      type: 'object',
      properties: {
        roomType: {
          type: 'string',
          enum: ['chamber', 'corridor', 'trap', 'puzzle', 'treasure', 'monster_lair', 'shrine'],
          description: 'Type of room to generate'
        },
        size: {
          type: 'string',
          enum: ['small', 'medium', 'large', 'huge'],
          description: 'Size of the room',
          default: 'medium'
        },
        partyLevel: {
          type: 'number',
          description: 'Party level for appropriate challenge',
          minimum: 1,
          maximum: 20,
          default: 5
        },
        theme: {
          type: 'string',
          description: 'Dungeon theme (e.g., "ancient tomb", "wizard tower", "natural cave")'
        }
      }
    }
  },

  {
    name: 'generate_settlement',
    description: 'Generate a settlement with NPCs, locations, and plot hooks',
    inputSchema: {
      type: 'object',
      properties: {
        size: {
          type: 'string',
          enum: ['hamlet', 'village', 'town', 'city'],
          description: 'Size of the settlement',
          default: 'village'
        },
        environment: {
          type: 'string',
          description: 'Environmental setting (e.g., "forest", "mountain", "coastal", "desert")'
        },
        primaryIndustry: {
          type: 'string',
          description: 'Main economic activity (e.g., "farming", "mining", "trade", "fishing")'
        },
        notableFeatures: {
          type: 'number',
          description: 'Number of notable locations/NPCs to generate',
          minimum: 1,
          maximum: 10,
          default: 3
        }
      }
    }
  },

  {
    name: 'generate_quest',
    description: 'Generate a complete quest with objectives, NPCs, and rewards',
    inputSchema: {
      type: 'object',
      properties: {
        questType: {
          type: 'string',
          enum: ['fetch', 'rescue', 'eliminate', 'investigate', 'escort', 'diplomacy', 'exploration'],
          description: 'Type of quest to generate'
        },
        partyLevel: {
          type: 'number',
          description: 'Party level for appropriate challenge and rewards',
          minimum: 1,
          maximum: 20,
          default: 5
        },
        urgency: {
          type: 'string',
          enum: ['low', 'medium', 'high', 'critical'],
          description: 'Quest urgency level',
          default: 'medium'
        },
        environment: {
          type: 'string',
          description: 'Where the quest takes place'
        },
        includeMap: {
          type: 'boolean',
          description: 'Generate a simple map description',
          default: false
        }
      }
    }
  },

  // Original Tools (keeping existing ones)
  {
    name: 'generate_loot',
    description: 'Generate random treasure or loot appropriate for the party level',
    inputSchema: {
      type: 'object',
      properties: {
        challengeRating: {
          type: 'number',
          description: 'Challenge rating or party level to base loot on',
          minimum: 0,
          maximum: 30
        },
        treasureType: {
          type: 'string',
          description: 'Type of treasure to generate',
          enum: ['individual', 'hoard', 'art', 'gems', 'magic_items']
        },
        includeCoins: {
          type: 'boolean',
          description: 'Whether to include coins in the loot',
          default: true
        }
      },
      required: ['challengeRating']
    }
  },
  
  {
    name: 'roll_table',
    description: 'Roll on a random table or generate random encounters',
    inputSchema: {
      type: 'object',
      properties: {
        tableType: {
          type: 'string',
          description: 'Type of random table to roll on',
          enum: ['encounter', 'weather', 'event', 'npc_trait', 'location_feature', 'treasure', 'complication', 'rumor']
        },
        environment: {
          type: 'string',
          description: 'Environment context for encounters/events (e.g., "forest", "dungeon", "city")'
        },
        partyLevel: {
          type: 'number',
          description: 'Party level for appropriate encounter difficulty',
          minimum: 1,
          maximum: 20
        }
      },
      required: ['tableType']
    }
  },

  {
    name: 'suggest_tactics',
    description: 'Get tactical suggestions for combat encounters',
    inputSchema: {
      type: 'object',
      properties: {
        actorId: {
          type: 'string',
          description: 'Actor ID to provide tactics for'
        },
        situation: {
          type: 'string',
          description: 'Current combat situation or context'
        },
        enemies: {
          type: 'array',
          items: {
            type: 'string'
          },
          description: 'List of enemy types or names'
        },
        tacticalFocus: {
          type: 'string',
          enum: ['offense', 'defense', 'support', 'control', 'mobility'],
          description: 'Focus area for tactical suggestions'
        }
      }
    }
  },
  
  {
    name: 'lookup_rule',
    description: 'Look up game rules, spells, or mechanical information',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Rule, spell, or mechanic to look up'
        },
        category: {
          type: 'string',
          description: 'Category to search in',
          enum: ['spells', 'conditions', 'actions', 'rules', 'items', 'monsters', 'feats', 'classes']
        },
        system: {
          type: 'string',
          description: 'Game system (defaults to current world system)'
        },
        includeExamples: {
          type: 'boolean',
          description: 'Include usage examples',
          default: false
        }
      },
      required: ['query']
    }
  },

  // Campaign Management Tools
  {
    name: 'track_campaign_event',
    description: 'Record and track important campaign events and storylines',
    inputSchema: {
      type: 'object',
      properties: {
        eventType: {
          type: 'string',
          enum: ['story_milestone', 'character_development', 'world_change', 'npc_interaction', 'location_discovery'],
          description: 'Type of event to track'
        },
        description: {
          type: 'string',
          description: 'Description of the event'
        },
        involvedActors: {
          type: 'array',
          items: { type: 'string' },
          description: 'Actor IDs involved in the event'
        },
        consequences: {
          type: 'array',
          items: { type: 'string' },
          description: 'Potential consequences or follow-up events'
        },
        importance: {
          type: 'string',
          enum: ['minor', 'moderate', 'major', 'critical'],
          description: 'Importance level of the event',
          default: 'moderate'
        }
      },
      required: ['eventType', 'description']
    }
  },

  {
    name: 'analyze_campaign_progress',
    description: 'Analyze campaign progression and suggest story developments',
    inputSchema: {
      type: 'object',
      properties: {
        timeFrame: {
          type: 'string',
          enum: ['session', 'arc', 'campaign'],
          description: 'Scope of analysis',
          default: 'session'
        },
        focusAreas: {
          type: 'array',
          items: {
            type: 'string',
            enum: ['pacing', 'character_development', 'story_tension', 'player_engagement', 'world_building']
          },
          description: 'Areas to focus analysis on'
        }
      }
    }
  },

  // Search and Information Tools
  {
    name: 'search_journals',
    description: 'Search journal entries and notes',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Search term to match against journal content'
        },
        folder: {
          type: 'string',
          description: 'Filter by folder name'
        },
        limit: {
          type: 'number',
          description: 'Maximum number of results to return (default: 10)',
          minimum: 1,
          maximum: 50
        }
      }
    }
  }
];:import { Tool } from '@modelcontextprotocol/sdk/types.js';

export const toolDefinitions: Tool[] = [
  {
    name: 'roll_dice',
    description: 'Roll dice using standard RPG notation (1d20, 2d6+3, etc.)',
    inputSchema: {
      type: 'object',
      properties: {
        formula: {
          type: 'string',
          description: 'Dice formula in standard notation (e.g., "1d20+5", "3d6", "2d10+1d4")',
          pattern: '^[0-9]+d[0-9]+([+-][0-9]+)*$'
        },
        reason: {
          type: 'string',
          description: 'Optional reason for the roll (e.g., "Attack roll", "Saving throw")'
        }
      },
      required: ['formula']
    }
  },
  
  {
    name: 'search_actors',
    description: 'Search for actors (characters, NPCs, monsters) in the current world',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Search term to match against actor names'
        },
        type: {
          type: 'string',
          description: 'Filter by actor type (e.g., "character", "npc", "monster")'
        },
        limit: {
          type: 'number',
          description: 'Maximum number of results to return (default: 10, max: 50)',
          minimum: 1,
          maximum: 50
        }
      }
    }
  },
  
  {
    name: 'search_items',
    description: 'Search for items, equipment, spells, and other game objects',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Search term to match against item names and descriptions'
        },
        type: {
          type: 'string',
          description: 'Filter by item type (e.g., "weapon", "armor", "spell", "consumable")'
        },
        rarity: {
          type: 'string',
          description: 'Filter by rarity (e.g., "common", "uncommon", "rare", "very rare", "legendary")'
        },
        limit: {
          type: 'number',
          description: 'Maximum number of results to return (default: 10, max: 50)',
          minimum: 1,
          maximum: 50
        }
      }
    }
  },
  
  {
    name: 'get_scene_info',
    description: 'Get information about the current scene or a specific scene',
    inputSchema: {
      type: 'object',
      properties: {
        sceneId: {
          type: 'string',
          description: 'Optional scene ID. If not provided, returns current active scene'
        }
      }
    }
  },
  
  {
    name: 'get_actor_details',
    description: 'Get detailed information about a specific actor',
    inputSchema: {
      type: 'object',
      properties: {
        actorId: {
          type: 'string',
          description: 'The ID of the actor to retrieve'
        }
      },
      required: ['actorId']
    }
  },
  
  {
    name: 'update_actor_hp',
    description: 'Update an actor\'s hit points',
    inputSchema: {
      type: 'object',
      properties: {
        actorId: {
          type: 'string',
          description: 'The ID of the actor to update'
        },
        change: {
          type: 'number',
          description: 'HP change amount (positive for healing, negative for damage)'
        },
        temp: {
          type: 'boolean',
          description: 'Whether this affects temporary hit points',
          default: false
        }
      },
      required: ['actorId', 'change']
    }
  },
  
  {
    name: 'search_journals',
    description: 'Search journal entries and notes',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Search term to match against journal content'
        },
        folder: {
          type: 'string',
          description: 'Filter by folder name'
        },
        limit: {
          type: 'number',
          description: 'Maximum number of results to return (default: 10)',
          minimum: 1,
          maximum: 50
        }
      }
    }
  },
  
  {
    name: 'generate_npc',
    description: 'Generate a random NPC with basic stats and personality',
    inputSchema: {
      type: 'object',
      properties: {
        race: {
          type: 'string',
          description: 'Specific race for the NPC (optional, will be random if not specified)'
        },
        level: {
          type: 'number',
          description: 'Character level (1-20, defaults to random based on context)',
          minimum: 1,
          maximum: 20
        },
        role: {
          type: 'string',
          description: 'NPC role or profession (e.g., "merchant", "guard", "noble", "commoner")'
        },
        alignment: {
          type: 'string',
          description: 'Specific alignment (optional)'
        }
      }
    }
  },
  
  {
    name: 'generate_loot',
    description: 'Generate random treasure or loot appropriate for the party level',
    inputSchema: {
      type: 'object',
      properties: {
        challengeRating: {
          type: 'number',
          description: 'Challenge rating or party level to base loot on',
          minimum: 0,
          maximum: 30
        },
        treasureType: {
          type: 'string',
          description: 'Type of treasure to generate',
          enum: ['individual', 'hoard', 'art', 'gems', 'magic_items']
        },
        includeCoins: {
          type: 'boolean',
          description: 'Whether to include coins in the loot',
          default: true
        }
      },
      required: ['challengeRating']
    }
  },
  
  {
    name: 'roll_table',
    description: 'Roll on a random table or generate random encounters',
    inputSchema: {
      type: 'object',
      properties: {
        tableType: {
          type: 'string',
          description: 'Type of random table to roll on',
          enum: ['encounter', 'weather', 'event', 'npc_trait', 'location_feature', 'treasure']
        },
        environment: {
          type: 'string',
          description: 'Environment context for encounters/events (e.g., "forest", "dungeon", "city")'
        },
        partyLevel: {
          type: 'number',
          description: 'Party level for appropriate encounter difficulty',
          minimum: 1,
          maximum: 20
        }
      },
      required: ['tableType']
    }
  },
  
  {
    name: 'get_combat_status',
    description: 'Get current combat state and initiative order',
    inputSchema: {
      type: 'object',
      properties: {
        detailed: {
          type: 'boolean',
          description: 'Include detailed combatant information',
          default: false
        }
      }
    }
  },
  
  {
    name: 'suggest_tactics',
    description: 'Get tactical suggestions for combat encounters',
    inputSchema: {
      type: 'object',
      properties: {
        actorId: {
          type: 'string',
          description: 'Actor ID to provide tactics for'
        },
        situation: {
          type: 'string',
          description: 'Current combat situation or context'
        },
        enemies: {
          type: 'array',
          items: {
            type: 'string'
          },
          description: 'List of enemy types or names'
        }
      }
    }
  },
  
  {
    name: 'lookup_rule',
    description: 'Look up game rules, spells, or mechanical information',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Rule, spell, or mechanic to look up'
        },
        category: {
          type: 'string',
          description: 'Category to search in',
          enum: ['spells', 'conditions', 'actions', 'rules', 'items', 'monsters']
        },
        system: {
          type: 'string',
          description: 'Game system (defaults to current world system)'
        }
      },
      required: ['query']
    }
  }
];