const path = require('path')

// template slug
module.exports.onCreateNode = ({ node, actions }) => {
  // console.log(JSON.stringify(node, undefined, 3))

  const { createNodeField } = actions
  if (node.internal.owner === 'gatsby-source-drupal') {
    // console.log(JSON.stringify(node, undefined, 3))
    const oldSlug = node.title
    if (node.title == undefined) {
      return null
    }
    // console.log(oldSlug, '@@@))((**&*')
    const slug = oldSlug.toLowerCase(oldSlug).split(' ').join('-')
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
  if (node.internal.type === 'menu_link_content__menu_link_content') {
    const navTitle = node.title
    const lowerCaseNav = navTitle.toLowerCase(navTitle).split(' ').join('-')
    createNodeField({
      node,
      name: 'lowerCaseMenuTitle',
      value: lowerCaseNav,
    })
  }
}

// creating pages
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // blog is portfolio
  const portfolioTemplate = path.resolve('./src/templates/portfolio.js')
  // creating product template
  const productsTemplate = path.resolve('./src/templates/products.js')
  // creating materials template
  const materialTemplate = path.resolve('./src/templates/materials.js')
  // creating custom page template
  const customTemplate = path.resolve('./src/templates/custom.js')
  // creating accessories template
  const accessoriesTemplate = path.resolve('./src/templates/accessories.js')
  // creating ALUOfferWindows template
  const aluOfferWindowsTemplate = path.resolve('./src/templates/alu-offer.js')
  // creating AluOfferSLIDINGDOORS template
  const aluOfferSlidingDoorsTemplate = path.resolve(
    './src/templates/sliding-doors.js'
  )

  // creating pvcoffer windows templates
  const pvcSchucoWindowsTemplate = path.resolve('./src/templates/pvc-offer.js')

  // creating pvcOfferslidingwindows templates
  const pvcSlidingDoorsTemplate = path.resolve(
    './src/templates/pvc-sliding-doors.js'
  )
  // creating shutters template
  const shuttersTemplate = path.resolve('./src/templates/shutters.js')
  // creating entrance door templates
  const entranceDoorsTemplate = path.resolve(
    './src/templates/entrance-doors.js'
  )

  const avidoorAvangardeTemplate = path.resolve(
    './src/templates/avidoor-avangarde.js'
  )

  const accessoriesAndAdditionWindowsTemplate = path.resolve(
    './src/templates/accessories-and-additions-windows.js'
  )

  // creating accessoriesAdditionsDoors template
  const accessoriesAndAdditionDoorsTemplate = path.resolve(
    './src/templates/accessories-and-additions-doors.js'
  )

  // Creating innovative solutions page
  const innovativeSolutionsTemplate = path.resolve(
    './src/templates/innovative-solutions.js'
  )

  // creating aluron wood tempalte template
  const aluronWoodTemplate = path.resolve('./src/templates/alu-clad-wood.js')

  // creating curtainwall ALU template
  const curtainWallAluTemplate = path.resolve(
    './src/templates/curtain-wall-alu.js'
  )

  // creating curtainwall WOOD template
  const curtainWallWoodTemplate = path.resolve(
    './src/templates/curtain-wall-wood.js'
  )

  // Creating curtain wall steel template
  const curtainWallSteelTemplate = path.resolve(
    './src/templates/curtain-wall-steel.js'
  )

  // Creeting Fiberglass tempalte
  const materialFiberglassTemplate = path.resolve(
    './src/templates/materials-fiberglass.js'
  )
  // creating woodwindows template
  const woodWindowTemplate = path.resolve('./src/templates/wood-options.js')

  const alucladDoorTemplate = path.resolve('./src/templates/alu-clad-doors.js')

  const steelSpecialtyMetalsDoor = path.resolve(
    './src/templates/steel-and-specialty-metals/doors.js'
  )

  const steelSpecialtyMetalWindow = path.resolve(
    './src/templates/steel-and-specialty-metals/windows.js'
  )

  const res = await graphql(`
    query {
      allNodeProducts {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodeBlog {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodeMaterials {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodeCustom {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodeAccessories {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodeCompany {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodeAluOfferWindows {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodeAluOfferSlidingDoors {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodePvcOfferSchucoWindows {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodePvcOfferSlidingWindows {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodeShutters {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodeEntranceDoors {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodeAvidoorAvangardeItems {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodeAccessoriesAndAdditionsWindow {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodeAccessoriesAndAdditionsDoors {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodeInnovativeSolutionsSubitems {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodeAlucladWoodSubItems {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodeCurtainWallTypeAlu {
        edges {
          node {
            title
            fields {
              slug
            }
          }
        }
      }
      allNodeCurtainWallTypeWood {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodeCurtainWallTypeSteel {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodeMaterialsFiberglass {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodeWoodWindows {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodeAluCladDoor {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodeSteelSpecialtyMetalsDoor {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodeSteelSpecialtyMetalsWindow {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (res.errors) {
    console.log(res.errors)
  }
  // console.log(JSON.stringify(res, null, 3))
  // destructuring the queries
  const {
    allNodeProducts,
    allNodeBlog,
    allNodeMaterials,
    allNodeCustom,
    allNodeAccessories,
    allNodeAluOfferWindows,
    allNodeAluOfferSlidingDoors,
    allNodePvcOfferSchucoWindows,
    allNodePvcOfferSlidingWindows,
    allNodeShutters,
    allNodeEntranceDoors,
    allNodeAvidoorAvangardeItems,
    allNodeAccessoriesAndAdditionsWindow,
    allNodeAccessoriesAndAdditionsDoors,
    allNodeInnovativeSolutionsSubitems,
    allNodeAlucladWoodSubItems,
    allNodeCurtainWallTypeAlu,
    allNodeCurtainWallTypeWood,
    allNodeCurtainWallTypeSteel,
    allNodeMaterialsFiberglass,
    allNodeWoodWindows,
    allNodeAluCladDoor,
    allNodeSteelSpecialtyMetalsDoor,
    allNodeSteelSpecialtyMetalsWindow,
  } = res.data
  // create Products page
  allNodeProducts.edges.forEach(({ node }) => {
    createPage({
      component: productsTemplate,
      path: `/products/${node.fields.slug}`,
      context: {
        slug: node.fields.slug,
      },
    })
  }),
    allNodeBlog.edges.forEach(({ node }) => {
      createPage({
        component: portfolioTemplate,
        path: `/portfolio/${node.fields.slug}`,
        context: {
          slug: node.fields.slug,
        },
      })
    })

  // creating materials pages
  allNodeMaterials.edges.forEach(({ node }) => {
    createPage({
      component: materialTemplate,
      path: `/materials/${node.fields.slug}`,
      context: {
        slug: node.fields.slug,
      },
    })
  }),
    // creating custom pages
    allNodeCustom.edges.forEach(({ node }) => {
      createPage({
        component: customTemplate,
        path: `/custom/${node.fields.slug}`,
        context: {
          slug: node.fields.slug,
        },
      })
    }),
    allNodeAccessories.edges.forEach(({ node }) => {
      createPage({
        component: accessoriesTemplate,
        path: `/accessories/${node.fields.slug}`,
        context: {
          slug: node.fields.slug,
        },
      })
    })
  allNodeAluOfferWindows.edges.forEach(({ node }) => {
    createPage({
      component: aluOfferWindowsTemplate,
      path: `/alu-offer/${node.fields.slug}`,
      context: {
        slug: node.fields.slug,
      },
    })
  }),
    allNodeAluOfferSlidingDoors.edges.forEach(({ node }) => {
      createPage({
        component: aluOfferSlidingDoorsTemplate,
        path: `/sliding-doors/${node.fields.slug}`,
        context: {
          slug: node.fields.slug,
        },
      })
    }),
    allNodePvcOfferSchucoWindows.edges.forEach(({ node }) => {
      createPage({
        component: pvcSchucoWindowsTemplate,
        path: `/pvc-offer/${node.fields.slug}`,
        context: {
          slug: node.fields.slug,
        },
      })
    }),
    allNodePvcOfferSlidingWindows.edges.forEach(({ node }) => {
      createPage({
        component: pvcSlidingDoorsTemplate,
        path: `/pvc-sliding-doors/${node.fields.slug}`,
        context: {
          slug: node.fields.slug,
        },
      })
    })
  allNodeShutters.edges.forEach(({ node }) => {
    createPage({
      component: shuttersTemplate,
      path: `/shutters/${node.fields.slug}`,
      context: {
        slug: node.fields.slug,
      },
    })
  })
  allNodeEntranceDoors.edges.forEach(({ node }) => {
    createPage({
      component: entranceDoorsTemplate,
      path: `/entrance-doors/${node.fields.slug}`,
      context: {
        slug: node.fields.slug,
      },
    })
  }),
    allNodeAvidoorAvangardeItems.edges.forEach(({ node }) => {
      createPage({
        component: avidoorAvangardeTemplate,
        path: `/avidoor-avangarde/${node.fields.slug}`,
        context: {
          slug: node.fields.slug,
        },
      })
    }),
    allNodeAccessoriesAndAdditionsWindow.edges.forEach(({ node }) => {
      createPage({
        component: accessoriesAndAdditionWindowsTemplate,
        path: `/accessories-and-additions-windows/${node.fields.slug}`,
        context: {
          slug: node.fields.slug,
        },
      })
    }),
    allNodeAccessoriesAndAdditionsDoors.edges.forEach(({ node }) => {
      createPage({
        component: accessoriesAndAdditionDoorsTemplate,
        path: `/accessories-and-additions-doors/${node.fields.slug}`,
        context: {
          slug: node.fields.slug,
        },
      })
    }),
    allNodeInnovativeSolutionsSubitems.edges.forEach(({ node }) => {
      createPage({
        component: innovativeSolutionsTemplate,
        path: `/innovative-solutions/${node.fields.slug}`,
        context: {
          slug: node.fields.slug,
        },
      })
    })
  allNodeAlucladWoodSubItems.edges.forEach(({ node }) => {
    createPage({
      component: aluronWoodTemplate,
      path: `/alu-clad-wood/${node.fields.slug}`,
      context: {
        slug: node.fields.slug,
      },
    })
  }),
    allNodeCurtainWallTypeAlu.edges.forEach(({ node }) => {
      createPage({
        component: curtainWallAluTemplate,
        path: `/curtain-wall-alu/${node.fields.slug}`,
        context: {
          slug: node.fields.slug,
        },
      })
    }),
    allNodeCurtainWallTypeWood.edges.forEach(({ node }) => {
      createPage({
        component: curtainWallWoodTemplate,
        path: `/curtain-wall-wood/${node.fields.slug}`,
        context: {
          slug: node.fields.slug,
        },
      })
    }),
    allNodeCurtainWallTypeSteel.edges.forEach(({ node }) => {
      createPage({
        component: curtainWallSteelTemplate,
        path: `/curtain-wall-steel/${node.fields.slug}`,
        context: {
          slug: node.fields.slug,
        },
      })
    }),
    allNodeMaterialsFiberglass.edges.forEach(({ node }) => {
      createPage({
        component: materialFiberglassTemplate,
        path: `/materials-fiberglass/${node.fields.slug}`,
        context: {
          slug: node.fields.slug,
        },
      })
    }),
    allNodeWoodWindows.edges.forEach(({ node }) => {
      createPage({
        component: woodWindowTemplate,
        path: `/wood-options/${node.fields.slug}`,
        context: {
          slug: node.fields.slug,
        },
      })
    }),
    allNodeAluCladDoor.edges.forEach(({ node }) => {
      createPage({
        component: alucladDoorTemplate,
        path: `/alu-clad-doors/${node.fields.slug}`,
        context: {
          slug: node.fields.slug,
        },
      })
    }),
    allNodeSteelSpecialtyMetalsDoor.edges.forEach(({ node }) => {
      createPage({
        component: steelSpecialtyMetalsDoor,
        path: `/steel-and-specialty-metals/doors/${node.fields.slug}`,
        context: {
          slug: node.fields.slug,
        },
      })
    }),
    allNodeSteelSpecialtyMetalsWindow.edges.forEach(({ node }) => {
      createPage({
        component: steelSpecialtyMetalWindow,
        path: `/steel-and-specialty-metals/windows/${node.fields.slug}`,
        context: {
          slug: node.fields.slug,
        },
      })
    })
}
