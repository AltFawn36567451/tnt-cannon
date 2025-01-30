player.onChat("cannon", function () {
    builder.teleportTo(pos(-1, 0, -10))
    builder.face(SOUTH)
    builder.mark()
    builder.move(FORWARD, 8)
    builder.move(LEFT, 2)
    builder.move(BACK, 8)
    builder.tracePath(STONE)
    builder.move(RIGHT, 1)
    builder.mark()
    builder.place(STONE_SLAB)
    builder.move(UP, 1)
    builder.place(TNT)
    builder.move(RIGHT, 1)
    builder.mark()
    builder.move(FORWARD, 2)
    builder.tracePath(STONE)
    builder.mark()
    builder.move(FORWARD, 6)
    builder.move(LEFT, 2)
    builder.move(BACK, 7)
    builder.tracePath(REDSTONE_WIRE)
    builder.shift(-1, 1, -2)
    builder.mark()
    builder.move(FORWARD, 1)
    builder.tracePath(REDSTONE_WIRE)
    builder.shift(4, -1, 0)
    builder.mark()
    builder.move(FORWARD, 2)
    builder.tracePath(blocks.repeater(NORTH, 4))
    builder.shift(1, 0, 1)
    builder.place(blocks.lever(BLOCK_TOP_POINTS_SOUTH_WHEN_OFF))
    builder.move(BACK, 1)
    builder.place(STONE)
    builder.move(DOWN, 1)
    builder.place(WATER)
    builder.move(BACK, 4)
    builder.mark()
    builder.move(BACK, 2)
    builder.tracePath(TNT)
})
