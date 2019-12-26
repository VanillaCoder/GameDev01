
export function detectCollision(player, gameObject) {
    let topLeft = player.corners.topLeft;
    let topRight = player.corners.topRight;
    let botRight = player.corners.botRight;
    let botLeft = player.corners.botLeft;

    //checking collisions, returning correct side

    if (topLeft[0] > gameObject.corners.botLeft[0] && topLeft[0] < gameObject.corners.botRight[0] &&
        topLeft[1] < gameObject.corners.botLeft[1] && player.oldY > (gameObject.position.y + gameObject.height)
    ) {
        return 'topLeft-Bottom'
    }
    if (topRight[0] > gameObject.corners.botLeft[0] && topRight[0] < gameObject.corners.botRight[0] &&
        topRight[1] < gameObject.corners.botLeft[1] && player.oldY > (gameObject.position.y + gameObject.height)
    ) {
        return 'topRight-Bottom'
    }
    if (botRight[0] > gameObject.corners.topLeft[0] && botRight[0] < gameObject.corners.topRight[0] &&
        botRight[1] > gameObject.corners.topLeft[1] && (player.oldY + player.height) < (gameObject.position.y)
    ) {
        return 'botRight-Top'
    }
    if (botLeft[0] > gameObject.corners.topLeft[0] && botLeft[0] < gameObject.corners.topRight[0] &&
        botLeft[1] > gameObject.corners.topLeft[1] && (player.oldY + player.height) < (gameObject.position.y)
    ) {
        return 'botLeft-Top'
    }
    if (botRight[1] - .1 < gameObject.corners.botLeft[1] && botRight[1] > gameObject.corners.topLeft[1] &&
        botRight[0] > gameObject.corners.topLeft[0] && (player.oldX - .1 + player.width) < (gameObject.position.x)
    ) {
        return 'botRight-Left'
    }
    if (topRight[1] > gameObject.corners.topLeft[1] && topRight[1] < gameObject.corners.botLeft[1] &&
        topRight[0] > gameObject.corners.topLeft[0] && (player.oldX - .1 + player.width) < (gameObject.position.x)
    ) {
        return 'topRight-Left'
    }
    if (topLeft[1] > gameObject.corners.topRight[1] && topLeft[1] < gameObject.corners.botRight[1] &&
        topLeft[0] < gameObject.corners.topRight[0] && (player.oldX) > (gameObject.position.x)
    ) {
        return 'topLeft-Right'
    }
    if (botLeft[1] > gameObject.corners.topRight[1] && botLeft[1] < gameObject.corners.botRight[1] &&
        botLeft[0] < gameObject.corners.topRight[0] && (player.oldX) > (gameObject.position.x)
    ) {
        return 'botLeft-Right'
    }

}