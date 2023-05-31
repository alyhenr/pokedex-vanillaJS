export default (data) => {
    return {
        name: data.name,
        frontImg: data.sprites.front_default,
        backImg: data.sprites.back_default,
        types: data.types.map(obj => obj.type.name),
        attack: data.stats
            .filter(stat => stat.stat.name === 'attack')
            .map(attack => attack.base_stat),
        defense: data.stats
            .filter(stat => stat.stat.name === 'defense')
            .map(defense => defense.base_stat),
        hp: data.stats
            .filter(stat => stat.stat.name === 'hp')
            .map(hp => hp.base_stat),
    }
}